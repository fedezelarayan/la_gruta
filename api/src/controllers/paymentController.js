const mercadopago = require("mercadopago");
const axios = require("axios");
const { Cart, Cart_Products, Products, User, Donation } = require("../db");
require("dotenv").config();
const { MP_CART_ACCESS_TOKEN } = process.env;

const createCartOrder = async (user_id) => {
    const cart = await Cart.findOne({
        where: { UserId: user_id },
        include: { model: Products, through: { Cart_Products } },
    });
    if (!cart) throw new Error("No es posible encontrar el carrito");

    const user = User.findByPk(user_id);
    cart.Products.forEach((prod) => user.addProducts(prod));

    const resumenPago = cart.Products.map((prod) => {
        const resumenPago = {
            title: prod.name,
            unit_price: prod.price,
            currency_id: "ARS",
            quantity: prod.Cart_Products.quantity,
        };
        return resumenPago;
    });

    mercadopago.configure({
        access_token: MP_CART_ACCESS_TOKEN,
    });

    const result = await mercadopago.preferences.create({
        items: resumenPago, //Aca va un array de productos con las props: title, unit_price, currency_id, quantity
        back_urls: {
            success: "http://localhost:3001/payment/donation/success",
            failure: "http://localhost:3001/payment/donation/failure",
            pending: "http://localhost:3001/payment/donation/pending",
        },
    });

    console.log(result);

    return result.body;
};

const createDonationOrder = async (user_mail, amount) => {
    

    // console.log(date);

    
    
    // console.log(user);

    mercadopago.configure({
        access_token: MP_CART_ACCESS_TOKEN,
    });

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: "Donación",
                unit_price: amount,
                currency_id: "ARS",
                quantity: 1,
            },
        ], //Aca va un array de productos con las props: title, unit_price, currency_id, quantity
        back_urls: {
            success: "http://localhost:3001/payment/donation/success",
            failure: "http://localhost:3001/payment/donation/failure",
            pending: "http://localhost:3001/payment/donation/pending",
        },
        notification_url:
            "https://lagruta.onrender.com/payment/donation/webhook",
        auto_return: "approved",
    });

    const payment_id = result.body.id;

    console.log(payment_id, "este es el payment_id");

    // await axios.get(`https://api.mercadopago.com/v1/payments/${payment_id}?accessToken=${MP_CART_ACCESS_TOKEN}`)
    // .then(response => console.log(response.data)).catch(error => console.log(error.response.status, error.response.data))

    // mercadopago.payment.findById(payment_id)
    //     .then(response => console.log(response.data))
    //     .catch(console.log({error: error.status}));

    

    return result.body;
};

const paymentVerification = async (info) => {
    /*
      date_approved
    payer.email
    status
    status_detail
    transaction_amount
    body.
    description: 'Donación'  
    */
   
    if(info.status === 'approved'){

        const user = await User.findOne({ where: { mail: info.payer.email } });

        if (user) {
            // console.log('hola');
            const donation = {
                date: info.date_approved,
                amount: info.transaction_amount,
                payer_mail: user.mail,
            };
            const newDonation = await Donation.create(donation);
            await user.addDonation(newDonation);
        }else{
            const donation = {
                date: info.date_approved,
                amount: info.transaction_amount,
                payer_mail: info.payer.email,
            };
            const dona = await Donation.create(donation);
            return dona;
        }

    }

};

module.exports = { createCartOrder, createDonationOrder, paymentVerification };
