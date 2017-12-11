const express = require("express");
const bodyParser = require("body-parser");
const knex = require(knex);
const app = express();

// Make docker database
// docker run -d --name connect-myql -p 3306:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -e MYSQL_DATABASE=milk mysql

const db = knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    database: "milk"
  }
})

app
  .use(bodyParser.json())
  .get("/", (req, res) => {
    // Connecting to tweets table in milk database
    // .then none blocking request
    db("tweets").then((tweets) => {
      res.send(tweets);
    })
  })
  .get("/users", (req, res) => {
    db("user").then((users) => {
      res.send(users);
    })
    // Catch your errors!
    .catch((err) => {
      res.send(err);
    })
  })
  .listen(3000)
;
