const { Cart, Products, User, Cart_Products } = require('../db');


const getUserCart = async ( user_id ) => {

    const cart = await Cart.findOne({ where: { UserId: user_id }, include: { model: Products, through: { Cart_Products }}});
    if(!cart) throw new Error('No es posible encontrar el carrito');

    return cart;
}


const addToCart = async ( user_id, product_id, quantity ) => {

    // const user = await User.findByPk(user_id);
    // if(!user) throw new Error('No es posible encontrar al usuario');
    
    // const cart = await user.getCart();


    let cart = await Cart.findOne({ where: { UserId: user_id }});
    if(!cart) cart = await Cart.create({UserId: user_id});

    const product = await Products.findByPk(product_id);
    if(!product) throw new Error('No se ha podido encontrar el producto');

    console.log(UserId);
    console.log(cart);
    console.log(product);


    await cart.addProducts(product, {through: { quantity: quantity }});

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
};

const emptyCart = async (user_id) => {

    const cart = await Cart.findOne({ where: { UserId: user_id }, include: { model: Products, through: { Cart_Products }}});
    if(!cart) throw new Error('No es posible encontrar el carrito');

    const user = await User.findByPk(user_id);
    if(!user) throw new Error('No se ha podido encontrar al usuario');

    cart.Products.forEach(prod => user.addProducts(prod));

    console.log(cart.Products);

    cart.setProducts([]);
}

module.exports = { addToCart, removeFromCart, getUserCart, emptyCart }