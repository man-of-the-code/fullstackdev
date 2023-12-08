const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const router = require("./routes/Router");
//require("./db/Connection");

//creating api instance
const api = express();
//applying cors policy
api.use(cors());
//body parsing
api.use(express.json());
//loading router
api.use(router);
//databse calling

// api.post("/register", (req, res) => {
//   const { name, email, password, cpassword } = req.body;
//   console.log(name, email, password, cpassword);
// });

api.listen(process.env.PORT, () => {
  console.log(
    `server started at port number ${process.env.PORT} successfully `
  );
});
