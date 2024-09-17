const {Rol, User} = require("../db");


const createRols = async()=> {

    const roles = [{name:"colaborador"},{name:"padrino"},{name:"superAdmin"}];

    await Rol.bulkCreate(roles)

}

/* const CreateAdmin = async() => {
    const admin = {
        fullName: "lagruta",
        username:"lagruta",
        birthDate:"",
        image:"",
        phone:"",
        email:"lagrutacdi@gmail.com",
        password: "lagruta2011",
    }
    const newAdmin = await User.create(admin)
    await newAdmin.setRols([3]) 
   

}*/

const CreateInformation = async() =>{
    /* await createRols() */
    await CreateAdmin()

}


module.exports = CreateInformation;