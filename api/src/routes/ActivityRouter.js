const { Router } = require("express");

const {
  getAllActivityHandler,
  postActivityHandler,
  deleteActivityHandler,
} = require("../handlers/activityHandler");

const ActivityRouter = Router();

ActivityRouter.get("/", getAllActivityHandler);
ActivityRouter.post("/", postActivityHandler);
ActivityRouter.delete("/:id_activity", deleteActivityHandler);

module.exports = ActivityRouter;
