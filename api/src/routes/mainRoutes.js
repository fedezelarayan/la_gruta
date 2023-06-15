const { Router } = require("express");

// import reouter

const ActivityRouter = require("./ActivityRouter");
/* const UserRouter = require("./UserRouter"); */
const ProductsRouter = require("./ProductsRouter");
const ChildrenRouter = require("./ChildrenRouter");
/* const ProductsTypesRouter = require("./ProductsTypeRouter"); */
/* const ActivityTypesRouter = require("./ActivityTypesRouter"); */
const router = Router();



// Rutes

/* router.use("/user", UserRouter); */
router.use("/activity", ActivityRouter);
router.use("/products", ProductsRouter);
router.use("/children", ChildrenRouter);
/* router.use("/productsTypes", ProductsTypesRouter); */
/* router.use("/activityTypes", ActivityTypesRouter); */

/* server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  }); */

module.exports = router;