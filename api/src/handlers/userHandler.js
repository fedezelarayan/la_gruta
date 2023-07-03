const {
  getUser,
  postUser,
  getAllUsers,
  userById,
  putRolUser,
  putEditUser,
  putStatusUser,
  restoreStatusUser

} = require("../controllers/UserControllers");

//* Handler que verifica en la DB si existe el User
const getUserHandler = async (req, res) => {
    const { mail } = req.params;
    try {
      const user = await getUser(mail);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

//* Handler que trae a todos los Users de la DB
const getAllUsersHandler = async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//* Handler que postea el user en la DB
const postUserHandler = async (req, res) => {
  const { fullName, username, birthDate, image, phone, mail, password, occupation, rol, address } = req.body;

  if (!fullName || !mail ) res.status(400).json({ msg: 'Faltan datos necesarios' });

  try {
    const newUser = await postUser(fullName, username, birthDate, image, phone, mail, password, occupation, rol, address);
    res.status(200).json({msg: "Usuario agregado con exito", userId: [newUser.id]});
  } catch (error) {
      console.log(error, "ESTE ES EL ERROR LOCOOO")
    res.status(400).json({ error: error.message });
  }
};

//* Handler que busca a usuario por ID
const getUserById = async (req, res) => {
  const { user_id } = req.params;
  try {
    const userId = await userById(user_id);
    res.status(200).json(userId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// //* Handler que modifica datos del usuario
const putEditUserHandler = async (req, res) => {
  const { mail, password, birthDate, image, phone, occupation, address, fullName, rol } = req.body
  try {
    await putEditUser(mail, password, birthDate, image, phone, occupation, address, rol, fullName)
    res.status(200).json("Datos cambiados con exito")
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// //* Handler que modifica el rol de usuario
const putRolUserHandler = async (req, res) => {
  const { id_user, admin, padrino, } = req.body; //ID DEL USUARIO QUE LE VAMOS A CAMBIAR EL ROL

  try {
    putUser = await putRolUser(id_user, admin, padrino, volutario);
    res.status(200).json(putUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// //* Handler para inactivar un user
const putStatusUserHandler = async (req, res) => {
  const { id_user } = req.params

  try {
    await putStatusUser(id_user);
    res.status(200).json("Usuario eliminado con exito");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///  Handler para activar user ////////////
const restoreStatusUserHandler = async (req, res) => {
  const { id_user } = req.params

  try {
    await restoreStatusUser(id_user);
    res.status(200).json("El usuario se restauro con exito");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUserHandler,
  postUserHandler,
  getAllUsersHandler,
  getUserById,
  // putRolUserHandler,
  putEditUserHandler,
  putStatusUserHandler,
  restoreStatusUserHandler,
};
