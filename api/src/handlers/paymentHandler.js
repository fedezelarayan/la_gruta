const { createCartOrder, createDonationOrder } = require('../controllers/paymentController');
const { emptyCart } = require('../controllers/cartControllers')


const cartOrderHandler = async (req, res) => {
  /*   const { user_id } = req.params; */
    try {
        const result = await createCartOrder(/* user_id */);
        /* await emptyCart(user_id); */
        return res.status(200).json(result); 
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
};


const donationOrderHandler = async (req, res) => {
    const { user_mail, amount } = req.body;
    // console.log(user_mail, amount);
    try {
        const result = await createDonationOrder( user_mail, amount );
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}
// const successCartHandler = async (req, res) => {
//     try {
//         res.send("Success");
//     } catch (error) {
//         res.status(400).json({error: error.message});
//     }
// }

 const webhooCartHandler = async (req, res) => {
     try {
        console.log("este es el query", req.query);
        res.send("Pending");
        } catch (error) {
         res.status(400).json({error: error.message});
     }
 }

module.exports = { 
    cartOrderHandler,
    donationOrderHandler,
    // successCartHandler,
     webhooCartHandler
};