const { Router } = require ('express');

const { /* orderByPrice, */ filterByType, filterByName } = require ("../../handlers/filterHandlers/filterProductsHandlers");
const filterRouter = Router();

/* filterRouter.get("/byPrice", orderByPrice); */
filterRouter.get("/byType", filterByType);
filterRouter.get("/name", filterByName)

module.exports = filterRouter; 


