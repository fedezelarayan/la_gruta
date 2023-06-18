//?----------------------------IMPORTS--------------------------------

const { User, Rol, Activity } = require("../db");
const { Op } = require("sequelize");
//?----------------------------CONTROLLERS------------------------------

//*---------------GET ALL USERS----------------------
const getAllUsers = async () => {
    const allUsers = await User.findAll({
        include: {
            model: Rol && Activity,
            through: { attributes: [] },
        },
    });

    return allUsers;
};

//*---------------CREATE USER---------------------

const postUser = async (
    fullName,
    birthDate,
    image,
    phone,
    mail,
    password,
    rol
) => {
    if (!fullName || !password || !mail) {
        throw new Error("Faltan datos");
    }
    // const findUserByUsername = await User.findOne({ where: { fullName } });
    const findUserByEmail = await User.findOne({ where: { mail } });

    // if (findUserByUsername) {
    //   throw new Error("Ya existe el nombre de usuario");
    // } else
    if (findUserByEmail) throw new Error("Ya existe un usuario con el mismo email");

    const newUser = await User.create({
        fullName,
        birthDate,
        image,
        phone,
        mail,
        password,
    })

    newUser.addRol(rol);

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

// //*-----------------GET USER---------------------
// const getUser = async (password, email) => {
//   if (!password) {
//     throw new Error("No puede enviar una contraseña vacia");
//   } else if (!email) {
//     throw new Error("No puede enviar un email vacio");
//   } else {
//     const findUser = await User.findOne({ where: { email } });
//     if (!findUser) {
//       throw new Error("El usuario no existe");
//     } else {
//       const findUser2 = await User.findOne({
//         where: { password, email },
//         attributes: ["id", "fullName","birthDate", "image", "phone", "email", "admin","password", "volunteer", "sponsor"],
//       });
//       if (!findUser2) {
//         throw new Error("Contraseña equivocada");
//       }

//       if(!findUser2.status) throw new Error("Usuario bloqueado")
//       return findUser2;
//     }
//   }
// };

// //*---------------PUT PASSWORD USER---------------------
// const putPasswordUser = async (email, password) => {
//   const findUser = await User.findOne({where:{
//     email
//   }})

//   if(!findUser){ throw new Error("El usuario no existe")}

//   findUser.password = password

//   findUser.save()

//   return;
// }

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
    // putRolUser,
    // putPasswordUser,
    // putStatusUser
};
