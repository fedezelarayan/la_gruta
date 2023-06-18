const { Products, ProductsType } = require ('../../db')

const porPrecio = async (precio) => {
    const orderedProducts = await Products.findAll({
        order: [['price', precio]],
        include: {
            model: ProductsType,
            through: {
                attributes: [],
            },
        },
    })   
return orderedProducts;
}

module.exports = { porPrecio };

/* asc-dsc */