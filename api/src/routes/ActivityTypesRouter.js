const { Router } = require("express");
const ActivityTypesRouter = Router();

const {
    getAllActivityTypesHandler,
    getActivityTypesHandler,
    createActivityTypesHandler,
    putActivityTypesHandler
} = require ("../handlers/roomTypesHandler")

ActivityTypesRouter.get("/", getAllActivityTypesHandler)
ActivityTypesRouter.get("/:id_Activity", getActivityTypesHandler)
ActivityTypesRouter.post("/:id_Activity", createActivityTypesHandler)
ActivityTypesRouter.put("/:id_Activity", putActivityTypesHandler)


module.exports = ActivityTypesRouter;