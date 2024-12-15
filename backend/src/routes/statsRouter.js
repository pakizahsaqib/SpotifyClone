var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("Stats route with GET method");
});

module.exports = router;
