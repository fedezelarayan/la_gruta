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
    rolTestData,
} = require("./testData");

const CreateAdmin = async() => {
    const admin = {
        fullName: "admin",
        username:"admin",
        birthDate:"",
        image:"",
        phone:"",
        mail:"admin@gmail.com",
        password: "admin123",
    }
    await User.create(admin)
    
    const newAdmin = await User.findOne({where:{username:"admin"}})
    const rol = await Rol.findByPk(1)
    await rol.addUser(newAdmin)
   

}

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
        await CreateAdmin()

        testUser.forEach(user => user.addActivity(testActivity[Math.floor(Math.random()*7)].id));

        testProduct.forEach(product => product.addProductsType(Math.floor(Math.random()*15)));

        testActivity.forEach(activity => activity.addActivityType(Math.floor(Math.random()*8)));

        console.log('Datos cargados exitosamente!');

        // console.log(testUser);

    } catch (error) {

        console.log(error);

    }

}

module.exports = { testDataUploader };
