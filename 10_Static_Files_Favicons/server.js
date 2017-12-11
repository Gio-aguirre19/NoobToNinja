const express = require("express");
const bodyParser = require("body-parser");
const users = require("./routes/users");
const app = express();

// Name spacing: will make all urls start with {something}
// app.use("/{something}", users);
app
  // Grabs application json requests
  .use(bodyParser.json())
  // Grabs form posts
  .use(bodyParser.urlencoded({extended: false}))
  // Uses routes from users page
  .use(users)
;

app.listen(3000)
