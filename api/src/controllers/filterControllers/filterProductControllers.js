const { Products, ProductsType } = require ('../../db');
const { Op } = require('sequelize');

const filtroTipo = async (name) => {
    const allProducts = await Products.findAll({
        include: {
            model: ProductsType,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        },
    });
    /* console.log(allProducts); */
    const filteredProducts = allProducts.filter((Products) =>
    Products.dataValues.ProductsTypes.some((p) => p.name === name));  //<---- arreglar metodo some "no se puede aplicar some en un array vacio, pero no esta vacio"

    if (!filteredProducts.length) {
        throw new Error ("Tipo de productos no encontrados");
    }
    return filteredProducts;
};




const filtroNombre = async (name) => {
    const productosFiltrados = await Products.findAll({
        where: {
            name: {
                [Op.substring]: name,
            },
        }
    })
    // const filteredProducts = await productosFiltrados.filter((pr) => pr.dataValues.name.toLowerCase().includes(name.toLowerCase()))
    console.log(productosFiltrados)
    return productosFiltrados;
}

module.exports = { filtroTipo, filtroNombre };