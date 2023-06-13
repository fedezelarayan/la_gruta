const { Router } = require("express");
const UserRouter = Router();

const {
  getUserHandler,
  postUserHandler,
  getAllUsersHandler,
  putRolUserHandler,
  putPasswordUserHandler,
  putStatusUserHandler
} = require("../handlers/userHandler");

const checkUserProperties = (req, res, next) => {
  const { email, password, username } = req.body;

  if (email && password && username) {
    return postUserHandler(req, res, next);
  }

  if (email && password) {
    return getUserHandler(req, res, next);
  }

  return res.status(400).json({ error: "Falta información en la solicitud" });
};

UserRouter.post("/", checkUserProperties);
UserRouter.get("/:id_user", getAllUsersHandler);
UserRouter.put("/password", putPasswordUserHandler)
UserRouter.put("/status/:id_user",putStatusUserHandler)
UserRouter.put("/", putRolUserHandler);

module.exports = UserRouter;