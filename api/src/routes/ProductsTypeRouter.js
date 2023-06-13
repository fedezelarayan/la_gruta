const { Router } = require("express");
const ProductsTypesRouter = Router();

const {
    getAllProductsTypesHandler,
    getProductsTypesHandler,
    createProductsTypesHandler,
    putProductsTypesHandler
} = require ("../handlers/roomTypesHandler")

roomTypesRouter.get("/", getAllProductsTypesHandler)
roomTypesRouter.get("/:id_hotel", getProductsTypesHandler)
roomTypesRouter.post("/:id_hotel", createProductsTypesHandler)
roomTypesRouter.put("/:id_roomtype", putProductsTypesHandler)

module.exports = ProductsTypesRouter;