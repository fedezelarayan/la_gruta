const { Products, User, Review } = require('../db');


const postReview = async (user_id, content, rating, product_id) => {

    const user = await User.findByPk(user_id);
    if(!user) throw new Error ('Para comentar primero debes logearte');
    const product = await Products.findByPk(product_id);
    if(!product) throw new Error ('Producto inexistente');
    console.log(product_id);

    const review = await Review.create ({ user_id, content, rating, product_id })
    await product.addReview(review);
    return review;
};


module.exports = {
   
    postReview
}
/* { 
    "user_id":"",
    "content": "",
    "rating": "",
    "product_id": 
  } */