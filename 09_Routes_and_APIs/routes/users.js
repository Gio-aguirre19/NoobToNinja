const express = require("express");
const router = express.Router();

router
  // Sending in first get to second get using next
  .get("/", (req, res, next) => {
    req.body = "Homepage";
    next();
  })
  .get("/", (req, res) => {
    res.send(req.body);
  })
  // Only catches when the params are filled
  // (?) = optional
  .get("/users/", (req, res) => {
    res.send(users)
  })
  .get("/users/:id/:first_name?", (req, res) => {
    const { id } = req.params;
    const user = users .find(user => user.id == id);
    if (user){
      res.send(user);
    } else {
      res.status(404).send(`User ${id} does not exist`);
    }
  })
  .delete("/users/:id", (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id == id);

    if (index > -1){
      users.splice(index, 1);
      res.sendStatus(200);
    } else {
      res.status(404).send(`User ${id} does not exist`)
    }
  })
  .post("/users", (req, res) => {
    console.log(req.body);
    res.send("Post!");
  })
;

module.exports =  router;

// mockaroo.com json formated
var users = [{
  "id": 1,
  "first_name": "Angelia",
  "last_name": "Klassmann",
  "email": "aklassmann0@miibeian.gov.cn",
  "gender": "Female",
  "ip_address": "103.45.64.109"
}, {
  "id": 2,
  "first_name": "Neall",
  "last_name": "Pauletti",
  "email": "npauletti1@dedecms.com",
  "gender": "Male",
  "ip_address": "236.147.63.116"
}, {
  "id": 3,
  "first_name": "Laurens",
  "last_name": "Ashfull",
  "email": "lashfull2@amazon.co.uk",
  "gender": "Male",
  "ip_address": "91.239.72.253"
}, {
  "id": 4,
  "first_name": "Lucian",
  "last_name": "Kleinert",
  "email": "lkleinert3@mail.ru",
  "gender": "Male",
  "ip_address": "138.69.253.198"
}, {
  "id": 5,
  "first_name": "Nicol",
  "last_name": "Hoffmann",
  "email": "nhoffmann4@hexun.com",
  "gender": "Male",
  "ip_address": "226.201.126.8"
}, {
  "id": 6,
  "first_name": "Moises",
  "last_name": "Lenden",
  "email": "mlenden5@php.net",
  "gender": "Male",
  "ip_address": "72.59.94.73"
}, {
  "id": 7,
  "first_name": "Boy",
  "last_name": "Mulchrone",
  "email": "bmulchrone6@joomla.org",
  "gender": "Male",
  "ip_address": "255.255.151.67"
}, {
  "id": 8,
  "first_name": "Mendy",
  "last_name": "Salmons",
  "email": "msalmons7@goo.ne.jp",
  "gender": "Male",
  "ip_address": "27.117.113.180"
}, {
  "id": 9,
  "first_name": "Hilarius",
  "last_name": "Jillions",
  "email": "hjillions8@phoca.cz",
  "gender": "Male",
  "ip_address": "193.18.203.109"
}, {
  "id": 10,
  "first_name": "Anselm",
  "last_name": "Huerta",
  "email": "ahuerta9@tinypic.com",
  "gender": "Male",
  "ip_address": "253.208.141.112"
}, {
  "id": 11,
  "first_name": "Hilly",
  "last_name": "Grzegorek",
  "email": "hgrzegoreka@spotify.com",
  "gender": "Male",
  "ip_address": "66.213.177.50"
}, {
  "id": 12,
  "first_name": "Sheffie",
  "last_name": "Elfe",
  "email": "selfeb@ifeng.com",
  "gender": "Male",
  "ip_address": "250.21.160.49"
}, {
  "id": 13,
  "first_name": "Ivie",
  "last_name": "Nisius",
  "email": "inisiusc@sakura.ne.jp",
  "gender": "Female",
  "ip_address": "141.78.4.65"
}, {
  "id": 14,
  "first_name": "Ula",
  "last_name": "Tiplady",
  "email": "utipladyd@rambler.ru",
  "gender": "Female",
  "ip_address": "130.109.30.69"
}, {
  "id": 15,
  "first_name": "Darcy",
  "last_name": "Labrom",
  "email": "dlabrome@phpbb.com",
  "gender": "Female",
  "ip_address": "212.189.70.32"
}, {
  "id": 16,
  "first_name": "Louella",
  "last_name": "Portman",
  "email": "lportmanf@goo.ne.jp",
  "gender": "Female",
  "ip_address": "132.82.32.73"
}, {
  "id": 17,
  "first_name": "Giffy",
  "last_name": "Lembke",
  "email": "glembkeg@wordpress.com",
  "gender": "Male",
  "ip_address": "82.74.0.101"
}, {
  "id": 18,
  "first_name": "Clevey",
  "last_name": "Barlass",
  "email": "cbarlassh@ning.com",
  "gender": "Male",
  "ip_address": "46.9.229.23"
}, {
  "id": 19,
  "first_name": "Erminia",
  "last_name": "Wastie",
  "email": "ewastiei@eepurl.com",
  "gender": "Female",
  "ip_address": "219.66.72.182"
}, {
  "id": 20,
  "first_name": "Gilli",
  "last_name": "Winscum",
  "email": "gwinscumj@ftc.gov",
  "gender": "Female",
  "ip_address": "61.26.136.151"
}]
