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

    console.log(user_id);
    console.log(cart);
    console.log(product);

    if( quantity <= product.stock){
        await cart.addProducts(product, {through: { quantity: quantity }});
    }else{
        throw new Error('La cantidad solicitada es mayor al stock disponible');
    }

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

const changeQuantity = async (user_id, product_id, quantity) => {

    if(!user_id) throw new Error('Falta el ID del usuario');

    const cart = await Cart.findOne({ where: { UserId: user_id }, include: { model: Products, through: { Cart_Products } }})

    if(!product_id){
        throw new Error('Falta el ID del producto')
    }

    const product = Products.findByPk(product_id);

    const allCartProducts = await cart.getProducts();

    
    const prod = await cart.getProducts({ where: { id: product_id },  });

    // console.log('primer instancia del producto', prod[0].Cart_Products);
    
    const otherProducts = allCartProducts.filter( prod => prod.id != product_id);
    
    if(quantity <= product.stock){
         prod[0].Cart_Products.quantity = Number(quantity);
    }else{
        throw new Error('La cantidad solicitada es mayor al stock disponible');
    }
    
    // console.log('segunda instancia del producto', prod[0].Cart_Products);

    const finalCart = otherProducts.concat(prod);

    // console.log('Este es otherProducts: ', otherProducts);
    // console.log('Esta es la primer instancia del carrito: ', allCartProducts);
    // console.log('Esta es la segunda instancia del carrito: ', finalCart);

    await cart.setProducts([]);

    console.log(cart.Products);

    // await cart.setProducts(finalCart);

    // await cart.save();

    // console.log(cart.Products);

    return finalCart;
}

module.exports = { addToCart, removeFromCart, getUserCart, emptyCart, changeQuantity }