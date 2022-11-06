// Calling all the required packages
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Configurations for "body-parser"
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(`${__dirname}/public`));

app.use("/", (req, res) => {
  res.status(200).render("index");
});



//Express server
module.exports = app;