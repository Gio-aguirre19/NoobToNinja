const express = require("express");
const favi = require("serve-favicon");
const app = express();
const assets = __dirname + "/public";
const favicon = __dirname + "/public/puzzle.ico";

app
  .set("views", __dirname + "/views")
  .set("view engine", "hjs")
  .use(express.static(assets))
  .use(favi(favicon))
  .get("/", (req, res) => {
    var title = "Welcome Home";
    var tweets = [
      "Did you see the game?",
      "Another Quote from our glorious leader.",
      "What's in your toilet? The answer may surprise you."
    ];
    res.render("index", { title, tweets, showTweets: true,
      // header file will be header var name when used in hjs
      partials: {header: "header", tweets: "tweets"},
    })
  })
;

app.listen(3050)
