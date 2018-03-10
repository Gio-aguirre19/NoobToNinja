const express = require("express");

const app = express();

app
  .get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
  })
  .get("/profile", (req, res) => {
    const profile = {name: "Gio"}
    res.send(profile);
  })

app.listen(3000)
