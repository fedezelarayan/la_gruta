const {
    Activity,
    ActivityType,
    Children,
    Products,
    ProductsType,
    User,
    Rol
} = require("../db");
const {
    productsTestData,
    activityTestData,
    childrenTestData,
    userTestData,
    activityTypeTestData,
    productsTypeTestData,
    rolTestData
} = require("./testData");

const testDataUploader = async () => {

    try {

        const testUser = await User.bulkCreate(userTestData, { ignoreDuplicates: true });
        
        await Rol.bulkCreate(rolTestData, { ignoreDuplicates: true });
        
        await Children.bulkCreate(childrenTestData, { ignoreDuplicates: true });
        
        const testProduct = await Products.bulkCreate(productsTestData, { ignoreDuplicates: true });
        
        await ProductsType.bulkCreate(productsTypeTestData, { ignoreDuplicates: true });
        
        const testActivity = await Activity.bulkCreate(activityTestData, { ignoreDuplicates: true });
        
        await ActivityType.bulkCreate(activityTypeTestData, { ignoreDuplicates: true });
        
        testUser.forEach(user => user.addRol(Math.floor(Math.random()*3)));

        testProduct.forEach(product => product.addProductsType(Math.floor(Math.random()*15)));

        testActivity.forEach(activity => activity.addActivityType(Math.floor(Math.random()*8)));

        console.log('Datos cargados exitosamente!');

        // console.log(testUser);

    } catch (error) {

        console.log(error);

    }

}

module.exports = { testDataUploader };
