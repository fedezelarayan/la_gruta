const { createCartOrder, createDonationOrder, paymentVerification, cartPaymentVerification } = require('../controllers/paymentController');
const { emptyCart } = require('../controllers/cartControllers')
const mercadopago = require('mercadopago');


const cartOrderHandler = async (req, res) => {
    const { user_id } = req.params;
    try {
        const result = await createCartOrder(user_id);
        await emptyCart(user_id);
        return res.status(200).json(result); 
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
};

const webhookCartHandler = async (req, res) => {
    const pay = req.query;;
    try {
        if(pay.type === 'payment'){

            const data = await mercadopago.payment.findById(pay['data.id']);
            console.log(data.body.items);
            const info = data.body;
            const pago = await cartPaymentVerification(info);
            console.log(pago);
            
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(error);
    }
}

const donationOrderHandler = async (req, res) => {
    const { user_email, amount } = req.body;
    // console.log(user_email, amount);
    try {
        const result = await createDonationOrder( user_email, amount );
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

const webhookDontaionHandler = async (req, res) => {
    const pay = req.query;
    console.log(pay);
    try {
        if(pay.type === 'payment'){

            const data = await mercadopago.payment.findById(pay['data.id']);
            // console.log(data);
            const info = data.body;
            const dona = await paymentVerification(info);
            console.log(dona);
            
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(error);
    }

}

const successHandler = async (req, res) => {
    try {
        res.send("Success");
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
const failureHandler = async (req, res) => {
    try {
        res.send("Failure");
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
const pendingHandler = async (req, res) => {
    try {
        res.send("Pending");
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = { 
    cartOrderHandler,
    donationOrderHandler,
    successHandler,
    failureHandler,
    pendingHandler,
    webhookCartHandler,
    webhookDontaionHandler,
};
