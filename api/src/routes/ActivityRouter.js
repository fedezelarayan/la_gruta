const { Router } = require("express");

const {
  getAllActivityHandler,
  postActivityHandler,
  deleteActivityHandler,
} = require("../handlers/activityHandler");

const servicesRouter = Router();

servicesRouter.get("/", getAllActivityHandler);
servicesRouter.post("/", postActivityHandler);
servicesRouter.delete("/:id_activity", deleteActivityHandler);

module.exports = ActivityRouter;
