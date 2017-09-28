'use strict';

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client/dist")));
app.use(session({
   secret: "topSecretCode",
   resave: false,
   saveUninitialized: true
}));
app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(port, function() {
    console.log("listening on port", port);
})

