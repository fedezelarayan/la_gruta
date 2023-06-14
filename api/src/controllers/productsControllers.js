const { Products, ProductsType } = require ('../db');

const getAllProducts = async () => {
    const dbProducts = await Products.findAll();
    return dbProducts;
}

const postProducts = async (name, price, image, description, stock, type) => {
    const newProducts = await Products.create({name, price, image, description, stock, type})
    newProducts.addProductsType(type)
    return newProducts;
}

const getDetailProducts = async (id) => {
    const products = await Products.findByPk(id, {
        include: {
            model: ProductsType,
            attributes: ['name'],
            through: { attributes: [] }
        }
    })
    return products;
}

const deleteProduct = async (id) => {
        const deletProduct = await Products.findByPk(id)
        const deletedProduct = await deletProduct.destroy(); 
return deletedProduct;
}

module.exports = {
    getAllProducts,
    postProducts,
    getDetailProducts,
    deleteProduct,
 /*   putStatusProducts,
    updateProducts,
    getFilterAdminProducts,
    getAllAdminProducts */
}