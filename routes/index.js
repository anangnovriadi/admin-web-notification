const express = require("express");
const router = express.Router();
const notificationController = require("../controller/notificationController");

module.exports = app => {
  router.post("/send-subscribe", notificationController.send);

  app.use("/api", router);
};
