"use-strict";

const models = require("../models")
const webpush = require("web-push");

const publicKey = process.env.PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;

const send = async (req, res) => {
  await webpush.setVapidDetails("mailto:test@test.com", publicKey, privateKey);
  const payload = await JSON.stringify({ title: req.body.title });
  console.log(payload);
  await webpush.sendNotification(req.body.payload, payload).catch(err => console.error(err));

  // store to database
  models.userNotifications.create({
    title: req.body.title,
    message: req.body.title,
    device: "web"
  })

  let objectResponse = await {
    error: true,
    message: "Success.",
    data: req.body
  };

  return req.output(req, res, objectResponse, "info", 200);
};

module.exports = { send };
