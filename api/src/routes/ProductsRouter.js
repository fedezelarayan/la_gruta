const { Router } = require("express");
const productsRouter = Router();  ProductsRouter
const {
  getAllProductsHandler,
  getDetailProductsHandler,
  postProductsHandler,
  putStatusProductsHandler,
  updateProductsHandler,
  getFilterSuperAdminProductsHandler,
  getAllProductsAdminHandler
} = require("../handlers/productsHandler");

productsRouter.get("/allProducts/:id_superAdmin", getAllProductsAdminHandler);
productsRouter.get("/", getAllProductsHandler);
productsRouter.get("/:id_products", getDetailProductsHandler);
productsRouter.get("/stats/:id_superAdmin/:filter", getFilterSuperAdminProductsHandler);
productsRouter.put("/status/:id_products", putStatusProductsHandler)
productsRouter.put("/update/:id_products", updateProductsHandler)
productsRouter.post("/:id_user", postProductsHandler);

module.exports = productsRouter;