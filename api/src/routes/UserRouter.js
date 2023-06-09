const { Router } = require("express");


const {
  getUserHandler,
  postUserHandler,
  getAllUsersHandler,
  getUserById,
  putRolUserHandler,
  putEditUserHandler,
  putStatusUserHandler,
  restoreStatusUserHandler,
  getUserByMail
} = require("../handlers/userHandler");

const UserRouter = Router();

// const checkUserProperties = (req, res, next) => {
//   const { email, password, username } = req.body;

//   if (email && password && username) {
//     return postUserHandler(req, res, next);
//   }

//   if (email && password) {
//     return getUserHandler(req, res, next);
//   }

//   return res.status(400).json({ error: "Falta información en la solicitud" });
// };

// UserRouter.use(checkUserProperties);
UserRouter.get("/", getAllUsersHandler);
UserRouter.get("/:user_id", getUserById);
UserRouter.post("/", postUserHandler)
// UserRouter.get("/:id_user", getAllUsersHandler);
UserRouter.put("/edit", putEditUserHandler)
UserRouter.delete("/status/:id_user",putStatusUserHandler)
UserRouter.post("/restore/:id_user", restoreStatusUserHandler)
UserRouter.put("/", putRolUserHandler);
UserRouter.get('/mail/:mail', getUserHandler)

module.exports = UserRouter;