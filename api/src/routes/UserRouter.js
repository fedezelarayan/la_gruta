const { Router } = require("express");
const userRouter = Router();

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

userRouter.post("/", checkUserProperties);
userRouter.get("/:id_user", getAllUsersHandler);
userRouter.put("/password", putPasswordUserHandler)
userRouter.put("/status/:id_user",putStatusUserHandler)
userRouter.put("/", putRolUserHandler);

module.exports = userRouter;