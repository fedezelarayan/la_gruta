const { Router } = require('express');
const { cartOrderHandler, donationOrderHandler, successCartHandler, webhookCartHandler, webhookDontaionHandler } = require("../handlers/paymentHandler");

const paymentRouter = Router();

paymentRouter.post("/cart/create-order/:user_id", cartOrderHandler);

paymentRouter.get("/cart/webhook", webhookCartHandler);

paymentRouter.post("/donation/create-order/", donationOrderHandler);

paymentRouter.post("/donation/webhook", webhookDontaionHandler)

// peymentRouter.get("/cart/success", successCartHandler);



module.exports = paymentRouter