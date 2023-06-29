const mercadopago = require('mercadopago');
const { Cart, Cart_Products, Products, User, Donation } = require('../db');
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

    return result.body;
};

const createDonationOrder = async ( user_mail, amount ) => {

    

    const fecha = new Date();
    const date = fecha.toLocaleDateString();
    
    console.log(date);

    const donation = {
        date,
        amount
    };

    
    const user = await User.findOne({where: { mail: user_mail }});
    console.log(user);

    mercadopago.configure({
        access_token: MP_CART_ACCESS_TOKEN,
    });

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: 'Donación',
                unit_price: amount,
                currency_id: 'ARS',
                quantity: 1,
            }
        ],  //Aca va un array de productos con las props: title, unit_price, currency_id, quantity
        back_urls: {
            success: ""
        }
    });

    if(user){

        console.log('hola');
        const newDonation = await Donation.create(donation)
    
        await user.addDonation(newDonation);
    }


    return result.body;
}

module.exports = { createCartOrder, createDonationOrder }