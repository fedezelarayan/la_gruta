const { createOrder } = require('../controllers/mpController');


const cartOrderHandler = async (req, res) => {

    try {
        const result = await createOrder();
        res.status(200).json(result); 
    } catch (error) {
        res.status(400).json({error: error.message});
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