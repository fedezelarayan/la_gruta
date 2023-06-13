const { Router } = require("express");

const {
  getAllChildrenHandler,
  postChildrenHandler,
  deleteChildrenHandler,
} = require("../handlers/activityHandler");

const servicesRouter = Router();

servicesRouter.get("/", getAllChildrenHandler);
servicesRouter.post("/", postChildrenHandler);
servicesRouter.delete("/:id_activity", deleteChildrenHandler);

module.exports = ChildrenRouter;