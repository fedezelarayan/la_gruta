const {
    Activity,
    ActivityType,
    Children,
    Products,
    ProductsType,
    User,
} = require("../db");
const {
    productsTestData,
    activityTestData,
    childrenTestData,
    userTestData,
    activityTypeTestData,
    productsTypeTestData,
} = require("./testData");

const testDataUploader = () => {

    Children.bulkCreate(childrenTestData, {ignoreDuplicates: true });

    Products.bulkCreate(productsTestData, { ignoreDuplicates: true });

    console.log('Datos cargados exitosamente!');
}

module.exports = { testDataUploader };