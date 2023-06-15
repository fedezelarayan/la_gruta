const { Router } = require("express");

const {
  getAllChildrenHandler,
  postChildrenHandler,
  deleteChildrenHandler,
} = require("../handlers/childrenHandler");

const ChildrenRouter = Router();

ChildrenRouter.get("/", getAllChildrenHandler);
ChildrenRouter.post("/", postChildrenHandler);
ChildrenRouter.delete("/:id_child", deleteChildrenHandler);

module.exports = ChildrenRouter;