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


    // console.log(cart.Products);

    cart.setProducts([]);
}


const changeQuantity = async (user_id, product_id, quantity) => {

    if(!user_id) throw new Error('Falta el ID del usuario');

    /* const cart = await Cart.findOne({ where: { UserId: user_id }, include: { model: Products, through: { Cart_Products } }}) */
    
    const cart = await Cart_Products.findOne({ where: { UserId: user_id } })
    // <-- buscar registro en la tercer tabla y hacer la modif.
    // igualar el quantity que traemos del findone con el que llega por query, validad bien stock
    console.log(cart);
    if(!product_id){  
        throw new Error('Falta el ID del producto')
    }


    const product = Products.findByPk(product_id);

    //? Hasta aca chequeo que llegue la data necesaria

    const allCartProducts = await cart.getProducts();

    //? Traigo todos los productos que estan en el carrito del usuario
    
    const prod = await cart.getProducts({ where: { id: product_id },  });
    // hacer un consolelog de prod
    
    //? Separo al producto que se la quiere cambiar la cantidad de unidades

    // console.log('primer instancia del producto', prod[0].Cart_Products);
    
    const otherProducts = allCartProducts.filter( prod => prod.id != product_id);
    
    //? Armo un array con los objetos a los que no se le tiene que modificar la cantidad
    
    if(quantity <= product.stock){  
         prod[0].Cart_Products.quantity = Number(quantity);
    }else{
        throw new Error('La cantidad solicitada es mayor al stock disponible');
    }

    //! Aca hago la modificación de la cantidad en el producto
    
    // console.log('segunda instancia del producto', prod[0].Cart_Products);

    const finalCart = otherProducts.concat(prod); //investigar bien el concat

    //! Aca vuelvo a unir los productos a los que no se le modifico nada con el que si
    // console.log('Este es otherProducts: ', otherProducts);
    // console.log('Esta es la primer instancia del carrito: ', allCartProducts);
    // console.log('Esta es la segunda instancia del carrito: ', finalCart);

    // await cart.setProducts([]);

    console.log(finalCart);

    //? Aca consologueo que efectivamente se haya modificado

    await cart.setProducts(finalCart);
    //!Modifico los procutos del carrito para que esten actualizados

    await cart.save();  //save a cart_products
    //! Se guarda el carrito

    // console.log(cart.Products);

    //todo El problema aca es que el cambio que se hace en la cantidad de unidades de un producto no queda guardado en la base de datos, por lo que la traer de nuevo el carrito del usuario no se reflejan los cambios
    return finalCart;
}

module.exports = { addToCart, removeFromCart, getUserCart, emptyCart, changeQuantity }

module.exports = { addToCart, removeFromCart, getUserCart, emptyCart }

