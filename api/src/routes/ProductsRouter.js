const { Router } = require("express");
const productsRouter = Router();  
const {
  getAllProductsHandler,
  getDetailProductsHandler,
  postProductsHandler,
  getFilterSuperAdminProductsHandler,
  getAllProductsAdminHandler, 
  putStatusProductsHandler,
  updateProductsHandler,
} = require("../handlers/productsHandler");


productsRouter.get("/", getAllProductsHandler);
productsRouter.get("/:id_products", getDetailProductsHandler);
productsRouter.post("/:id_user", postProductsHandler);
productsRouter.get("/status/:id_superAdmin/:filter", getFilterSuperAdminProductsHandler);
productsRouter.get("/allProducts/:id_superAdmin", getAllProductsAdminHandler);
productsRouter.put("/status/:id_products", putStatusProductsHandler)
productsRouter.put("/update/:id_products", updateProductsHandler)


module.exports = productsRouter;