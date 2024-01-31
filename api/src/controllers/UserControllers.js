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

    return allUsers
    // .map((user) => ({
    //   ...user.toJSON(),
    //   paranoid: true, // Agrega la propiedad 'paranoid' basada en 'deletedAt'
    // }));
  };
  

  const getAllUsersDashboard = async () => {
    const allUsers = await User.findAll({
        paranoid: false,
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

    return allUsers
    // .map((user) => ({
    //   ...user.toJSON(),
    //   paranoid: true, // Agrega la propiedad 'paranoid' basada en 'deletedAt'
    // }));
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
            {
                model: Cart,
            }
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
    email,
    password,
    occupation,
    address,
    rol
) => {

    console.log("username:", fullName);
    console.log("email:", email);

    if (!fullName || !email)
        throw new Error("Faltan datos");

    const findUserByUsername = await User.findOne({ where: { fullName } });
    const findUserByEmail = await User.findOne({ where: { email } });

    if (findUserByUsername) throw new Error("Ya existe el nombre de usuario");

    if (findUserByEmail)
        throw new Error("Ya existe un usuario con el mismo email");

    const newUser = await User.create({
        fullName,
        username,
        birthDate,
        image,
        phone,
        email,
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
//     attributes: ["id", "username", "email", "admin","voluntario", "padrino" ],
//   });
// } else {
//   throw new Error("Permiso denegado, no eres administrador");
// }

//*-----------------GET USER---------------------
const getUser = async (email) => {
    try {
      const findUser = await User.findOne({
        where: {
          email: email,
        },
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
        ],
      });
      return findUser;
    } catch (error) {
      throw new Error(`Error al buscar el usuario: ${error.message}`);
    }
  };
  



    /*if (!findUser) {
      throw new Error("El usuario no existe");
    }  else {
      const findUser2 = await User.findOne({
        where: { email },
        attributes: ["id", "fullName","birthDate", "image", "phone", "email", "admin","password", "volunteer", "sponsor"],
      });
      if (!findUser2) {
        throw new Error("Contraseña equivocada");
      }
      if(!findUser2.status) throw new Error("Usuario bloqueado") */
  


// //*---------------PUT USER---------------------
// const putEditUser = async (email, password, birthDate, image, phone, occupation, address, rol, fullName) => {
//  const imgFullPath = image.path;

//     try {
//       const result = await cloudinary.uploader.upload(imgFullPath, { public_id: `image_${uuidv4()}` });
//       const imgLink = result.secure_url;
//       console.log(imgLink);
//       await fs.promises.unlink(imgFullPath);
//       img = imgLink;
//     } catch (error) {
//       throw new Error('Error al subir la imagen a Cloudinary');
//     }

//     const findUser = await User.findOne({
//         where: {
//             email,
//         }
//     })

//     if (!findUser) { throw new Error("El usuario no existe") }

//     if (password) findUser.password = password
//     if (birthDate) findUser.birthDate = birthDate
//     if (image) findUser.image = image
//     if (phone) findUser.phone = phone
//     if (occupation) findUser.occupation = occupation
//     if (address) findUser.address = address
//     if (fullName) findUser.fullName = fullName

//     if(rol){
//         await findUser.setRols(rol)
//      }

//     findUser.save()

//     return;
// }

// //*---------------PUT USER---------------------
const putEditUser = async (email, password, birthDate, phone, occupation, address, rol, fullName) => {
    // Eliminamos la lógica de manejo de imágenes
  
    const findUser = await User.findOne({
      where: {
        email,
      },
    });
  
    if (!findUser) {
      throw new Error("El usuario no existe");
    }
  
    if (password) findUser.password = password;
    if (birthDate) findUser.birthDate = birthDate;
    if (phone) findUser.phone = phone;
    if (occupation) findUser.occupation = occupation;
    if (address) findUser.address = address;
    if (fullName) findUser.fullName = fullName;
  
    if (rol) {
      await findUser.setRols(rol);
    }
  
    findUser.save();
  
    return;
  };
  

// //*---------------PUT ROL USER---------------------
 const putRolUser = async (id_user, rol) => {
   const findUser = await User.findByPk(id_user);

   if (findUser) {
     findUser.rol = rol;

     await findUser.save();
   } else {
     throw new Error("El usuario no existe");
   }

   return findUser;
 };

// //*------------- INACTIVAR USER -------------------------
const putStatusUser = async (id_user) => {
    const findUser = await User.findByPk(id_user);

    if (!findUser) {
        throw new Error("El usuario no existe");
    } else {
        // await findUser.update({ status: false }, { where: { id: id_user } });
        const deletedUser = await findUser.destroy()
        return;
    }
};


/////////////////RESTORE USER /////////////////////////////////
const restoreStatusUser = async (id_user) => {
    const findUser = await User.findByPk(id_user, { paranoid: false });

    if (!findUser) {
        throw new Error("El Usuario no existe");
    } else {
    findUser.restore();
    return findUser;
    }

};

module.exports = {
    getUser,
    postUser,
    getAllUsers,
    userById,
    putRolUser,
    putEditUser,
    putStatusUser,
    restoreStatusUser
};
