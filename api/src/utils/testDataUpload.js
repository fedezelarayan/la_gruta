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

const testDataUploader = async () => {


    try {
        
        await Children.bulkCreate(childrenTestData, { ignoreDuplicates: true });
    
        await Products.bulkCreate(productsTestData, { ignoreDuplicates: true });

        // await Activity.bulkCreate(activityTestData, { ignoreDuplicates: true });

        // await Products.bulkCreate(productsTestData, { ignoreDuplicates: true });

        // await Products.bulkCreate(productsTestData, { ignoreDuplicates: true });

        // await Products.bulkCreate(productsTestData, { ignoreDuplicates: true });

        console.log('Datos cargados exitosamente!');

    } catch (error) {
        console.log(error)
    }

}

module.exports = { testDataUploader };