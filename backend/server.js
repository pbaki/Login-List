const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(8000, console.log("Server on port 8000"));
