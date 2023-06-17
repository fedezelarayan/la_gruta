const {
    ProductsType,
    ActivityType
} = require ('../db')



const getAllActivityTypes = () => {
    if (ActivityType.length === 0 ) {
        const activityType = ActivityType.findAll()
        console.log("Tipos de Actividades cargados exitosamente!")
            return activityType;
        } else {
            console.log("Los tipos de actividades ya se encuentran cargados!");
        }
    };

const getAllProductTypes = () => {
    if (ProductsType.length === 0 ) {
        const productType = ProductsType.findAll()
        console.log("Tipos de productos cargados exitosamente!")
            return productType;
        } else {
            console.log("Los tipos de productos ya se encuentran cargados!");
        }
    };

module.exports = {
    getAllProductTypes,
    getAllActivityTypes
};