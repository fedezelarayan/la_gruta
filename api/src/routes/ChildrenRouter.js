const { Router } = require("express");

const {
  getAllChildrenHandler,
  postChildrenHandler,
  deleteChildrenHandler,
} = require("../handlers/activityHandler");

const ChildrenRouter = Router();

ChildrenRouter.get("/", getAllChildrenHandler);
ChildrenRouter.post("/", postChildrenHandler);
ChildrenRouter.delete("/:id_activity", deleteChildrenHandler);

module.exports = ChildrenRouter;