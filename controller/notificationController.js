"use-strict";

const webpush = require('web-push');

const publicKey = process.env.PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;

const send = async (req, res) => {
  webpush.setVapidDetails('mailto:test@test.com', publicKey, privateKey);
  const payload = JSON.stringify({title: 'Push Notification' });
  webpush.sendNotification(req.body, payload)
    .catch((err) => console.error(err));
  
  let objectResponse = await {
    error: true,
    message: "Success.",
    data: req.body
  };

  return req.output(req, res, objectResponse, "info", 200);
};

module.exports = { send };
