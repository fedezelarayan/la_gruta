const { Router } = require('express');
const { cartOrderHandler, donationOrderHandler, successCartHandler, webhookCartHandler } = require("../handlers/paymentHandler");

const paymentRouter = Router();

paymentRouter.post("/cart/create-order/:user_id", cartOrderHandler);

paymentRouter.post("/donation/create-order/", donationOrderHandler);

// peymentRouter.get("/cart/success", successCartHandler);

peymentRouter.get("/cart/webhook", webhookCartHandler);


module.exports = paymentRouter