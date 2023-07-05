const mercadopago = require('mercadopago');
const axios = require('axios');
const { Cart, Cart_Products, Products, User, Donation } = require('../db');
require("dotenv").config();
const { MP_CART_ACCESS_TOKEN } = process.env;

const createCartOrder = async (/* user_id */) => {

 /*    const cart = await Cart.findOne({ where: { UserId: user_id }, include: { model: Products, through: { Cart_Products }}});
    if(!cart) throw new Error('No es posible encontrar el carrito'); */

/*     const user = User.findByPk(user_id);
    cart.Products.forEach(prod => user.addProducts(prod)); */
    
    const resumenPago =  [{
            title: "orden",
            unit_price: 1000,
            currency_id: "ARS",
            quantity: 2,     
    }]

    /* const resumenPago = cart.Products.map(prod => {
        
        const resumenPago = {
            title: prod.name,
            unit_price: prod.price,
            currency_id: "ARS",
            quantity: prod.Cart_Products.quantity,
        };
        return resumenPago;
    }) */
    
    mercadopago.configure({
        access_token: MP_CART_ACCESS_TOKEN,
    })

    const result = await mercadopago.preferences.create({
        items: resumenPago,  //Aca va un array de productos con las props: title, unit_price, currency_id, quantity
        back_urls: {
            success: "",  // <-- traer .env con las rutas 
            failure: "", 
        },
        notification_url : "https://f79e-2803-9800-9484-749a-d851-2f13-ead7-a786.sa.ngrok.io" //<--- deberia tener una ruta (webhook) que reciba la notif de mp, cuando se genere la transaccion 
                                                                                            // recibe una query string, un status (failure, success) y el id, luego de esto se automatiza esto
    }); 

    console.log(result);

    return result.body;
};

const createDonationOrder = async ( user_mail, amount ) => {

    

    const fecha = new Date();
    const date = fecha.toLocaleDateString();
    
    // console.log(date);

    const donation = {
        date,
        amount
    };

    
    const user = await User.findOne({where: { mail: user_mail }});
    // console.log(user);

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
            }, 
            
        ],        
            back_urls: {
            success: "",  // <-- traer .env con las rutas 
            failure: "", 
        },
        notification_url : "https://3dc3-2803-9800-9484-749a-d851-2f13-ead7-a786.sa.ngrok.io/payment/cart/webhook" //Aca va un array de productos con las props: title, unit_price, currency_id, quantity
        // back_urls: {
        //     success: ""
        // }
    });

    const payment_id = result.body.id;

    console.log(payment_id, 'este es el payment_id');

    // await axios.get(`https://api.mercadopago.com/v1/payments/${payment_id}?accessToken=${MP_CART_ACCESS_TOKEN}`)
    // .then(response => console.log(response.data)).catch(error => console.log(error.response.status, error.response.data))

    // mercadopago.payment.findById(payment_id)
    //     .then(response => console.log(response.data))
    //     .catch(console.log({error: error.status}));

    if(user){

        // console.log('hola');
        const newDonation = await Donation.create(donation)
    
        await user.addDonation(newDonation);
    }


    return result.body;
}

module.exports = { createCartOrder, createDonationOrder }
