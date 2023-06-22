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
/* const orderByName = require ('./filters/orderRouter'); */
const orderRouter = require("./filters/orderRouter");
const peymentRouter = require("./peymentRouter");
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
router.use("/order", orderRouter);
router.use("/payment", peymentRouter)


module.exports = router;