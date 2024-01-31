const { Router } = require("express");
const multer = require ('multer');
const path = require('path');

const {
  getUserHandler,
  postUserHandler,
  getAllUsersHandler,
  getUserById,
  putRolUserHandler,
  putEditUserHandler,
  putStatusUserHandler,
  restoreStatusUserHandler,
  getUserByEmail
} = require("../handlers/userHandler");

const UserRouter = Router();

const storage = multer.diskStorage({
  destination: path.join(__dirname, "assets"),
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
  }
});

const uploadImage = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      const filetypes = /jpeg|jpg|png|gif/;
      const mimetype = filetypes.test(file.mimetype);
      const extname = filetypes.test(path.extname(file.originalname));
      if(mimetype && extname) {
          return cb(null, true);
      }
      cb("Error: El archivo no es de tipo imagen.");
  },
}).single("image");

// UserRouter.use(checkUserProperties);
UserRouter.get("/", getAllUsersHandler);
UserRouter.get("/:user_id", getUserById);
UserRouter.post("/", postUserHandler)
// UserRouter.get("/:id_user", getAllUsersHandler);
UserRouter.put("/edit", uploadImage, putEditUserHandler)
UserRouter.delete("/status/:id_user", putStatusUserHandler)
UserRouter.post("/restore/:id_user", restoreStatusUserHandler)
UserRouter.put("/", putRolUserHandler);
UserRouter.get('/email/:email', getUserHandler)

module.exports = UserRouter;