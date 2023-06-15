const { Router } = require("express");
const productsRouter = Router();  
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


productsRouter.get("/", getAllProductsHandler);
productsRouter.post("/create"/* :id_user */, postProductsHandler);
productsRouter.get("/:id_products", getDetailProductsHandler);
productsRouter.delete("/delete/:id", deleteProducts);
productsRouter.post("/restore/:id", restoreProducts);
productsRouter.get("/status/:id_superAdmin/:filter", getFilterSuperAdminProductsHandler);
productsRouter.get("/allProducts/:id_superAdmin", getAllProductsAdminHandler);
productsRouter.put("/status/:id_products", putStatusProductsHandler)
productsRouter.put("/update/:id_products", updateProductsHandler)


module.exports = productsRouter;