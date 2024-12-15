var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("Song route with GET method");
});

module.exports = router;
