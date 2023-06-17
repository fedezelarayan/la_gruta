const { Router } = require("express");
const ProductsTypesRouter = Router();

const {
    getAllProductsTypesHandler,
/*     getProductsTypesHandler,
    createProductsTypesHandler,
    putProductsTypesHandler */
} = require ("../handlers/roomTypesHandler")

ProductsTypesRouter.get("/", getAllProductsTypesHandler)
/* ProductsTypesRouter.get("/:id_productsTypes", getProductsTypesHandler)
ProductsTypesRouter.post("/:id_productsTypes", createProductsTypesHandler)
ProductsTypesRouter.put("/:id_productsTypes", putProductsTypesHandler) */

module.exports = ProductsTypesRouter;