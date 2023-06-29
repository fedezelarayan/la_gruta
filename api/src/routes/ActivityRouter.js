const { Router } = require("express");
const multer = require ('multer');
const {
  getAllActivityHandler,
  postActivityHandler,
  deleteActivityHandler,
  getActivityIdHandler,
  restoreActivityHandler,
} = require("../handlers/activityHandler");
const ActivityRouter = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'assets')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} - ${file.originalname}`)
  }
})
const upload = multer ({ storage: storage })

ActivityRouter.get("/", getAllActivityHandler);
ActivityRouter.post("/", upload.single ('img'), postActivityHandler);
ActivityRouter.get("/:id", getActivityIdHandler)
ActivityRouter.delete("/:id_activity", deleteActivityHandler);
ActivityRouter.post("/:id_restore", restoreActivityHandler);
module.exports = ActivityRouter;
