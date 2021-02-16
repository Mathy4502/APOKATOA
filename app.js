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

<<<<<<< HEAD
app.get('/about-us', (req, res) => {
    return res.render('about-us.ejs');
});

app.get('/contact', (req, res) => {
    return res.render('contact.ejs');
});


app.get('/programmation', (req, res) => {
    return res.render('programmation.ejs');
});

app.get('/billeterie', (req, res) => {
    return res.render('ticket.ejs');
=======
app.get("/about-us", (req, res) => {
  return res.render("about-us.ejs");
});

app.get("/blog", (req, res) => {
  return res.render("blog.ejs");
});

app.get("/contact", (req, res) => {
  return res.render("contact.ejs");
});

app.get("/element", (req, res) => {
  return res.render("elements.ejs");
});

app.get("/programmation", (req, res) => {
  return res.render("programmation.ejs");
});

app.get("/ticket", (req, res) => {
  return res.render("ticket.ejs");
>>>>>>> dev
});

app.listen(3000);
