const { Router } = require("express");
const productsRouter = Router();
const multer = require('multer');  
const path = require('path');
const {
  getAllProductsHandler,
  postProductsHandler,
  getDetailProductsHandler,
  deleteProducts,
  restoreProducts,
  getFilterSuperAdminProductsHandler,
  getAllProductsAdminHandler, 
  putStatusProductsHandler,
  updateProductsHandler,
} = require("../handlers/productsHandler");

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
}).single("img");


productsRouter.get("/", getAllProductsHandler);
productsRouter.post("/create", uploadImage, postProductsHandler);
productsRouter.get("/:id_products", getDetailProductsHandler);
productsRouter.delete("/delete/:id", deleteProducts);
productsRouter.post("/restore/:id", restoreProducts);
productsRouter.get("/status/:id_superAdmin/:filter", getFilterSuperAdminProductsHandler);
productsRouter.get("/allProducts/:id_superAdmin", getAllProductsAdminHandler);
productsRouter.put("/status/:id_products", putStatusProductsHandler)
productsRouter.put("/update/:id_products", updateProductsHandler)


module.exports = productsRouter;