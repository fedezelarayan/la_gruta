const { Router } = require("express");
const ActivityTypesRouter = Router();

const {
    getAllActivityTypesHandler,
    getActivityTypesHandler,
    createActivityTypesHandler,
    putActivityTypesHandler
} = require ("../handlers/roomTypesHandler")

roomTypesRouter.get("/", getAllActivityTypesHandler)
roomTypesRouter.get("/:id_hotel", getActivityTypesHandler)
roomTypesRouter.post("/:id_hotel", createActivityTypesHandler)
roomTypesRouter.put("/:id_roomtype", putActivityTypesHandler)

module.exports = ActivityTypesRouter;