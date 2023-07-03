const {
    Activity,
    ActivityType,
    Children,
    Products,
    ProductsType,
    User,
    Rol,
    // Cart
} = require("../db");
const {
    productsTestData,
    activityTestData,
    childrenTestData,
    userTestData,
    activityTypeTestData,
    productsTypeTestData,
    rolTestData,
    // cartTestData
} = require("./testData");

const CreateAdmin = async () => {
   const roladmin = await Rol.findOne({where: {
       name:"admin" 
    }})
    const admin = {
        fullName: "lagruta",
        username: "lagruta",
        birthDate: "",
        image: "",
        phone: "",
        mail: "lagrutacdi@gmail.com",
        password: "lagruta2011",
    }
    const newAdmin = await User.create(admin)
    await newAdmin.setRols([roladmin.id])
}
/* const newAdmin = await User.findOne({where:{username:"admin"}})
const rol = await Rol.findByPk(3) */
/*  await rol.addUser(newAdmin)
}*/
/* 87e4d961-ea70-49fc-9e9d-5729553d7568 | Pattie Senecaux  */

const testDataUploader = async () => {

    try {

        const testUser = await User.bulkCreate(userTestData, { ignoreDuplicates: true });

        await Rol.bulkCreate(rolTestData, { ignoreDuplicates: true });

        await Children.bulkCreate(childrenTestData, { ignoreDuplicates: true });

        const testProduct = await Products.bulkCreate(productsTestData, { ignoreDuplicates: true });

        await ProductsType.bulkCreate(productsTypeTestData, { ignoreDuplicates: true });

        const testActivity = await Activity.bulkCreate(activityTestData, { ignoreDuplicates: true });

        await ActivityType.bulkCreate(activityTypeTestData, { ignoreDuplicates: true });

        // await Cart.bulkCreate(cartTestData);

        await testUser.forEach(user => user.addRol(Math.floor(Math.random() * 2)));
        await CreateAdmin();

        await testUser.forEach(user => user.addActivity(testActivity[Math.floor(Math.random() * 8)].id));

        await testProduct.forEach(product => product.addProductsType(Math.floor(Math.random() * 3 + 1)));

        await testActivity.forEach(activity => activity.addActivityType(Math.floor(Math.random() * 8)));

        console.log('Datos cargados exitosamente!');

        // console.log(testUser);

        return;

    } catch (error) {

        console.log(error);

    }

}

const testDataCheck = async () => {

    const activitiesCheck = await Activity.count();

    const productsCheck = await Products.count();

    return { activitiesCheck, productsCheck };

}

module.exports = { testDataUploader, testDataCheck };
