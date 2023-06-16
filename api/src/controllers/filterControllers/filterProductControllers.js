const { Products } = require ('../../db');

const filtroTipo = async (productType) => {
    const productosFiltrados = await Products.findAll({
        where: {
            name: productType,  // <-- Cambiar la propiedad NAME por tipo de producto.
        }
    })
    return productosFiltrados;
}

const filtroNombre = async (name) => {
    const productosFiltrados = await Products.findAll({
        where: {
            name: name,
        }
    })
    return productosFiltrados;
}

module.exports = { filtroTipo, filtroNombre };