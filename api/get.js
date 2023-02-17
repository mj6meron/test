const express = require("express");
const router = express.Router();



// Define routes for /, /door, /window, and /lamp APIs
router.get("/", function (req, res) {
  console.log("Request received at /:");
  if (!req) {
    res.send("You succefully send a request and request body: ", req);
  } else {
    res.send(`This is the root API.`);
  }
});

router.get("/door", function (req, res) {
  console.log("Request received at /door:");
  if (!req) {
    res.send("You succefully send a request and request body: ", req);
  } else {
    res.send(`This is the door API.`);
  }
});

router.get("/window", function (req, res) {
  console.log("Request received at /window:");
  if (!req) {
    res.send("You succefully send a request and request body: ", req);
  } else {
    res.send(`This is the window API.`);
  }
});

router.get("/lamp/on", function (req, res) {
  console.log("Request received at /lamp: on");
  if (!req) {
    res.send("You succefully send a request to turn on lampaaa");
  } else {
    res.send("You succefully send a request to turn on lampaaa");
  }
});
router.get("/lamp/off", function (req, res) {
  console.log("Request received at /lamp: off");
  if (!req) {
    res.send("You succefully send a request to turn off lampaaa");
  } else {
    res.send("You succefully send a request to turn off lampaaa");
  }
});


module.exports = router;
