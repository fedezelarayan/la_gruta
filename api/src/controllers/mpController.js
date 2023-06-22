const mercadopago = require('mercadopago');
require("dotenv").config();
const { MP_CART_ACCESS_TOKEN } = process.env;

const createOrder = async () => {
    
    mercadopago.configure({
        access_token: MP_CART_ACCESS_TOKEN,
    })

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: "Prod de prueba",
                unit_price: 200,
                currency_id: "ARS",
                quantity: 3
            },
        ],  //Aca va un array de productos con las props: title, unit_price, currency_id, quantity
        back_urls: {
            success: ""
        }
    }); 

    console.log(result);

    return result;
};

module.exports = { createOrder }