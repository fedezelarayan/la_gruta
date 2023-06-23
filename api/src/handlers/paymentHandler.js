const { createOrder } = require('../controllers/paymentController');


const cartOrderHandler = async (req, res) => {
    const { user_id } = req.params;
    try {
        const result = await createOrder(user_id);
        return res.status(200).json(result); 
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
};

// const successCartHandler = async (req, res) => {
//     try {
//         res.send("Success");
//     } catch (error) {
//         res.status(400).json({error: error.message});
//     }
// }

// const webhooCartHandler = async (req, res) => {
//     try {
//         res.send("Pending");
//     } catch (error) {
//         res.status(400).json({error: error.message});
//     }
// }

module.exports = { 
    cartOrderHandler,
    // successCartHandler,
    // webhooCartHandler
};