const { Router } = require ('express');

const { /* orderByPrice, */ filterByType, filterByName } = require ("../../handlers/filterHandlers/filterActivityHandlers");
const filterRouter = Router();


filterRouter.get("/byType", filterByType);
filterRouter.get("/name", filterByName)

module.exports = filterRouter; 