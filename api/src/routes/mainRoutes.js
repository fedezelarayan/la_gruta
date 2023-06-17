const { Router } = require("express");
// import reouter

const ActivityRouter = require("./ActivityRouter");
const UserRouter = require("./UserRouter");
const ProductsRouter = require("./ProductsRouter");
const ChildrenRouter = require("./ChildrenRouter");
const ProductsTypesRouter = require("./ProductsTypeRouter");
const ActivityTypesRouter = require("./ActivityTypesRouter");
const filterProductsRouter = require ("./filters/filterProductsRouter");
const filterActivityRouter = require ("./filters/filterActivityRouter");
const router = Router();



// Rutes

router.use("/user", UserRouter);
router.use("/activity", ActivityRouter);
router.use("/products", ProductsRouter);
router.use("/children", ChildrenRouter);
router.use("/productsTypes", ProductsTypesRouter);
router.use("/activityTypes", ActivityTypesRouter);
router.use("/filter", filterProductsRouter);
router.use("/filter_activity", filterActivityRouter);



module.exports = router;