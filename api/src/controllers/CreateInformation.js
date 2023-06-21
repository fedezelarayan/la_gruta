const {Rol, User} = require("../db");


const createRols = async()=> {

    const roles = [{name:"collaborator"},{name:"sponsor"},{name:"superAdmin"}];

    await Rol.bulkCreate(roles)

}

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

const CreateInformation = async() =>{
    /* await createRols() */
    await CreateAdmin()

}


module.exports = CreateInformation;