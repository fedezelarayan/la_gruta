//?----------------------------IMPORTS--------------------------------

const { User, Rol, Activity, Cart, Roles, Donation } = require("../db");
const { Op } = require("sequelize");
//?----------------------------CONTROLLERS------------------------------

//*---------------GET ALL USERS----------------------
const getAllUsers = async () => {
    const allUsers = await User.findAll({
        include: [
            {
                model: Rol,

                through: { attributes: [] },
            },
            {
                model: Activity,
                through: { attributes: [] },
            },
            {
                model: Cart,
            },
            {
                model: Donation,
            },
        ],
    });


    return allUsers;
};

//*---------------GET USER BY ID------------------

const userById = async (id) => {
    if (!id) throw new Error("Falta el id del Usuario");

    const user = await User.findByPk(id, {
        include: [
            {
                model: Rol,

                through: { attributes: [] },
            },
            {
                model: Activity,
                through: { attributes: [] },
            },
        ],
    });

    if (!user) throw new Error("No existe el Usuario");

    return user;
};

//*---------------CREATE USER---------------------

const postUser = async (
    fullName,
    username,
    birthDate,
    image,
    phone,
    mail,
    password,
    occupation,
    address,
    rol
) => {
    if (!fullName || !mail)
        throw new Error("Faltan datos");

    const findUserByUsername = await User.findOne({ where: { fullName } });
    const findUserByEmail = await User.findOne({ where: { mail } });

    if (findUserByUsername) throw new Error("Ya existe el nombre de usuario");

    if (findUserByEmail)
        throw new Error("Ya existe un usuario con el mismo email");

    const newUser = await User.create({
        fullName,
        username,
        birthDate,
        image,
        phone,
        mail,
        password,
        occupation,
        address,
        
    });

    await newUser.addRol(rol);

    return newUser;
};

//!-------lógica útil pero que sirve para admin------

// if (findUser.rol == 3) {
//   findAllUsers = await User.findAll({
//     where: {
//       id: {
//         [Op.not]: id_user,
//       },
//     },
//     order: [["id", "ASC"]],
//     attributes: ["id", "username", "email", "admin","volunteer", "sponsor" ],
//   });
// } else {
//   throw new Error("Permiso denegado, no eres administrador");
// }

//*-----------------GET USER---------------------
const getUser = async (password, mail) => {
  if (!password) {
    throw new Error("No puede enviar una contraseña vacia");
  } else if (!mail) {
    throw new Error("No puede enviar un email vacio");
  } else {
    const findUser = await User.findOne({ where: { mail } });
    if (!findUser) {
      throw new Error("El usuario no existe");
    } else {
      const findUser2 = await User.findOne({
        where: { password, mail },
        attributes: ["id", "fullName","birthDate", "image", "phone", "email", "admin","password", "volunteer", "sponsor"],
      });
      if (!findUser2) {
        throw new Error("Contraseña equivocada");
      }

      if(!findUser2.status) throw new Error("Usuario bloqueado")
      return findUser2;
    }
  }
};

// //*---------------PUT USER---------------------
const putEditUser = async (mail, password, birthDate, image, phone, occupation, address, rol) => {
const findUser = await User.findOne({where:{
 mail,
 }})

if(!findUser){ throw new Error("El usuario no existe")}

if (password) findUser.password = password
if (birthDate) findUser.birthDate = birthDate
if (image) findUser.image = image
if (phone) findUser.phone = phone
if (occupation) findUser.occupation = occupation
if (address) findUser.address = address

if(rol){const  newrol =  await Roles.findOne ({where:{Users: findUser.id}
})
newrol.Rols = rol
newrol.save()}

findUser.save()

 return;
}

// //*---------------PUT ROL USER---------------------
// const putRolUser = async (id_user, rol) => {
//   const findUser = await User.findByPk(id_user);

//   if (findUser) {
//     findUser.rol = rol;

//     await findUser.save();
//   } else {
//     throw new Error("El usuario no existe");
//   }

//   return findUser;
// };

// //*------------- BANEAR USER -------------------------
// const putStatusUser = async (id_user) => {
//   const findUser = await User.findByPk(id_user);

//   if (findUser) {
//     if(findUser.status == true){findUser.status = false} else{

//       findUser.status = true
//     }

//     await findUser.save();
//   } else {
//     throw new Error("El usuario no existe");
//   }

//   return findUser;
// };

module.exports = {
    // getUser,
    postUser,
    getAllUsers,
    userById,
    // putRolUser,
    putEditUser,
    // putStatusUser
};
