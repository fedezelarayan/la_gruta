const { Router } = require("express");

// import reouter

const ActivityRouter = require("");
const UserRouter = require("");
const ProductsRouter = require("");
const ChildrenRouter = require("");
const ProductsTypesRouter = require("");
const ActivityTypesRouter = require("");
const router = Router();



// Rutes

router.use("/user", UserRouter);
router.use("/activity",ActivityRouter );
router.use("/products",ProductsRouter);
router.use("/children",ChildrenRouter);
router.use("/productsTypes",ProductsTypesRouter);
router.use("/activityTypes",ActivityTypesRouter);


module.exports = router;