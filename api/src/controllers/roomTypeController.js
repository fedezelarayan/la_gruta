const {
    ProductsType,
    ActivityType
} = require('../db');

const getAllProductsTypes = () => {
    if (ProductsType.length === 0) {
        const productType = ProductsType.findAll()
        console.log("Tipos de productos cargados exitosamente!")
        return productType;
    } else {
        console.log("Los tipos de productos ya se encuentran cargados!");
    }
}

const getAllActivityTypes = () => {
    if (ActivityType.length === 0) {
        const activityType = ActivityType.findAll()
        console.log("Tipos de productos cargados exitosamente!")
        return activityType;
    } else {
        console.log("Los tipos de productos ya se encuentran cargados!");
    }
}

module.exports = { getAllProductsTypes, getAllActivityTypes };