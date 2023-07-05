const { Router } = require('express');
const { cartOrderHandler, donationOrderHandler, successHandler, failureHandler, pendingHandler, webhookCartHandler, webhookDontaionHandler } = require("../handlers/paymentHandler");

const paymentRouter = Router();

paymentRouter.post("/cart/create-order/:user_id", cartOrderHandler);

// paymentRouter.get("/cart/webhook", webhookCartHandler);

paymentRouter.post("/donation/create-order/", donationOrderHandler);
paymentRouter.get("/donation/success", successHandler);
paymentRouter.get("/donation/failure", failureHandler);
paymentRouter.get("/donation/pending", pendingHandler);
paymentRouter.post("/donation/webhook", webhookDontaionHandler);



module.exports = paymentRouter