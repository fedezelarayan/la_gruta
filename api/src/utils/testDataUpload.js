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
    activityTestDataArte,
    activityTestDataDeportes,
    activityTestDataEducacion,
    activityTestDataMedicina,
    // cartTestData
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
    const newAdmin = await User.create(admin)
    await newAdmin.addRol(3)
    /* const newAdmin = await User.findOne({where:{username:"admin"}})
    const rol = await Rol.findByPk(3)
    await rol.addUser(newAdmin) */
}
/* 87e4d961-ea70-49fc-9e9d-5729553d7568 | Pattie Senecaux  */

const testDataUploader = async () => {

    try {

        const testUser = await User.bulkCreate(userTestData, { ignoreDuplicates: true });
        
        await Rol.bulkCreate(rolTestData, { ignoreDuplicates: true });
        
        await Children.bulkCreate(childrenTestData, { ignoreDuplicates: true });
        
        const testProduct = await Products.bulkCreate(productsTestData, { ignoreDuplicates: true });
        
        await ProductsType.bulkCreate(productsTypeTestData, { ignoreDuplicates: true });
                
        await ActivityType.bulkCreate(activityTypeTestData, { ignoreDuplicates: true });

        const activityArt = await Activity.bulkCreate(activityTestDataArte);

        const activitySports = await Activity.bulkCreate(activityTestDataDeportes);

        const activityEduc = await Activity.bulkCreate(activityTestDataEducacion);

        const activityMed = await Activity.bulkCreate(activityTestDataMedicina);

        // await Cart.bulkCreate(cartTestData);
        
        await testUser.forEach(user => user.addRol(Math.floor(Math.random()*2))); 
        /* await CreateAdmin() */

        await testProduct.forEach(product => product.addProductsType(Math.floor(Math.random()*3 + 1)));

        await activityArt.forEach(activity => activity.addActivityType(4));

        await activitySports.forEach(activity => activity.addActivityType(3));
        
        await activityEduc.forEach(activity => activity.addActivityType(1));

        await activityMed.forEach(activity => activity.addActivityType(2));

        const userAdmin = async () => {
            const user = await User.findOne({
                where: {
                    mail: "malenaparaschuk@gmail.com"
                }
            })
            if (user) {
                user.setRol(3)
            }
        }
        userAdmin();

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
