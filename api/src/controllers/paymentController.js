const mercadopago = require('mercadopago');
const { Cart, Cart_Products, Products, User } = require('../db');
require("dotenv").config();
const { MP_CART_ACCESS_TOKEN } = process.env;

const createCartOrder = async (user_id) => {

    const cart = await Cart.findOne({ where: { UserId: user_id }, include: { model: Products, through: { Cart_Products }}});
    if(!cart) throw new Error('No es posible encontrar el carrito');

    const resumenPago = cart.Products.map(prod => {
        
        const resumenPago = {
            title: prod.name,
            unit_price: prod.price,
            currency_id: "ARS",
            quantity: prod.Cart_Products.quantity,
        };
        return resumenPago;
    })
    
    mercadopago.configure({
        access_token: MP_CART_ACCESS_TOKEN,
    })

    const result = await mercadopago.preferences.create({
        items: resumenPago,  //Aca va un array de productos con las props: title, unit_price, currency_id, quantity
        back_urls: {
            success: ""
        }
    }); 

    console.log(result);

    return result;
};

const createDonationOrder = async ( user_id, amount ) => {

    const user = await User.findByPk(user_id);

}

module.exports = { createCartOrder, createDonationOrder }