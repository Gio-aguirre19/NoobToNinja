const express = require("express");
const favi = require("serve-favicon");
const app = express();
const assets = __dirname + "/public";
const favicon = __dirname + "/public/puzzle.ico";

app
  .use(express.static(assets))
  .use(favi(favicon))
  .get(("/api/profile/"), (req, res) => {
    var profile = {name: "Gio"};

    res.send(profile);
  })
;

app.listen(3050)
