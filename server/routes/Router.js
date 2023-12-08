const express = require("express");
const router = express.Router();

//user registration
router.post("/register", (req, res) => {
  const { name, email, password, cpassword } = req.body;
  console.log(name, email, password, cpassword);
});

module.exports = router;
