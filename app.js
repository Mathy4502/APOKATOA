const express = require('express');
const app = express();

/* Parse POST request to json */
app.use(express.json());

app.use(express.static('public'));

//ejs
app.set('views', './views')
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    return res.render('index.ejs');
});

app.get('/', (req, res) => {
    return res.render('about-us.ejs');
});

app.get('/', (req, res) => {
    return res.render('blog.ejs');
});

app.get('/', (req, res) => {
    return res.render('contact.ejs');
});

app.get('/', (req, res) => {
    return res.render('elements.ejs');
});

app.get('/', (req, res) => {
    return res.render('programmation.ejs');
});

app.get('/', (req, res) => {
    return res.render('ticket.ejs');
});


app.listen(3000);