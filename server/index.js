const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.listen(5200, () => {
  console.log("Server has started on port 5200");
});
