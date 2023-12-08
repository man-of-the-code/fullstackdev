const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_CONN_STRING)
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });
