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

/*     { 
        "user_id":"585db0f5-f020-46f9-a47e-6c4a267e3f38",
        "content": "lalala",
        "rating": 2,
        "product_id": "7e198d47-056c-422e-ae69-ec5843a52e22"
      } */
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