const express = require("express");
const app = express();
const PORT = 55000;

app.get("/", function(req, res) {
  res.send("hello world");
});

app.listen(PORT);
