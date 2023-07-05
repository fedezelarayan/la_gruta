const { Router } = require('express');
const { cartOrderHandler, donationOrderHandler, successCartHandler, webhooCartHandler } = require("../handlers/paymentHandler");

const paymentRouter = Router();

paymentRouter.post("/cart/create-order/"/* :user_id */, cartOrderHandler);

paymentRouter.post("/donation/create-order/", donationOrderHandler);

// peymentRouter.get("/cart/success", successCartHandler);

paymentRouter.post("/cart/webhook", webhooCartHandler); 


module.exports = paymentRouter