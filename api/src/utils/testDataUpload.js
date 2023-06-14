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

        await User.bulkCreate(userTestData, { ignoreDuplicates: true });
        
        await Children.bulkCreate(childrenTestData, { ignoreDuplicates: true });
    
        await Products.bulkCreate(productsTestData, { ignoreDuplicates: true });

        await ProductsType.bulkCreate(productsTypeTestData, { ignoreDuplicates: true });

        await Activity.bulkCreate(activityTestData, { ignoreDuplicates: true });

        await ActivityType.bulkCreate(activityTypeTestData, { ignoreDuplicates: true });

        console.log('Datos cargados exitosamente!');

    } catch (error) {

        console.log(error);

    }

}

module.exports = { testDataUploader };
