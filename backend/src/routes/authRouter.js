const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Auth route with GET method");
});
module.exports = router;