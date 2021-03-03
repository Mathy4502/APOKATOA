const express = require("express");
const app = express();

/* Parse POST request to json */
app.use(express.json());

app.use(express.static("public"));

//ejs
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  return res.render("index.ejs");
});

app.get("/about-us", (req, res) => {
  return res.render("about-us.ejs");
});

app.get("/contact", (req, res) => {
  return res.render("contact.ejs");
});

app.get("/programmation", (req, res) => {
  return res.render("programmation.ejs");
});

app.get("/ticket", (req, res) => {
  return res.render("ticket.ejs");
});

app.get("/hebergement", (req, res) => {
  return res.render("hebergement.ejs");
});

app.listen(3000);
