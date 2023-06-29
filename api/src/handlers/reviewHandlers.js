const { postReview } = require('../controllers/reviewController'); 



const postReviewHandler = async (req, res) => {
try {
    const { user_id, content, rating, product_id } = req.body
    const review = await postReview( user_id, content, rating, product_id )
    res.status(200).json(review);
} catch (error) {
    res.status(400).json({error: error.message});    
}
};

const deleteReviewHandler = async (req, res) => {
try {
    res.status(200).json("esta es la vista para eliminar reviews");
} catch (error) {
    res.status(400).json({error: error.message}); 
}
};

const putReviewHandler = async (req, res) => {
try {
    res.status(200).json("esta es la vista para modificar reviews");
} catch (error) {
    res.status(400).json({error: error.message}); 
}
};

module.exports = { 
    postReviewHandler, 
    deleteReviewHandler, 
    putReviewHandler, 
};