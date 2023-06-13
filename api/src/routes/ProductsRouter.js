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

hotelsRouter.get("/allProducts/:id_superAdmin", getAllProductsAdminHandler);
hotelsRouter.get("/", getAllProductsHandler);
hotelsRouter.get("/:id_products", getDetailProductsHandler);
hotelsRouter.get("/stats/:id_superAdmin/:filter", getFilterSuperAdminProductsHandler);
hotelsRouter.put("/status/:id_products", putStatusProductsHandler)
hotelsRouter.put("/update/:id_products", updateProductsHandler)
hotelsRouter.post("/:id_user", postProductsHandler);

module.exports = productsRouter;