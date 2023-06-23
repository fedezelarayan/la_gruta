const { Cart, Products, User } = require('../db');


const addToCart = async ( user_id, product_id, quantity ) => {

    const user = await User.findByPk(user_id);
    if(!user) throw new Error('No es posible encontrar al usuario');
    
    const cart = await user.getCart();
    if(!cart) throw new Error('No es posible encontrar el carrito del usuario');

    const product = await Products.findByPk(product_id);
    if(!product) throw new Error('No se ha podido encontrar el producto');

    await cart.addProduct(product, { through: { quantity: quantity }});

    // product.stock -= quantity;

    return product;
};

const removeFromCart = async ( user_id, product_id ) => {

    const user = await User.findByPk(user_id);
    if(!user) throw new Error('No es posible encontrar al usuario');
    
    const cart = await user.getCart();
    if(!cart) throw new Error('No es posible encontrar el carrito del usuario');

    const product = await Products.findByPk(product_id);
    if(!product) throw new Error('No se ha podido encontrar el producto');

    await cart.removeProduct(product);

    return;
}

module.exports = { addToCart, removeFromCart }