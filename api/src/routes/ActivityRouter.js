const { Router } = require("express");

const {
  getAllActivityHandler,
  postActivityHandler,
  deleteActivityHandler,
  getActivityIdHandler,
} = require("../handlers/activityHandler");

const ActivityRouter = Router();

ActivityRouter.get("/", getAllActivityHandler);
ActivityRouter.post("/", postActivityHandler);
ActivityRouter.get("/:id", getActivityIdHandler)
ActivityRouter.delete("/:id_activity", deleteActivityHandler);

module.exports = ActivityRouter;
