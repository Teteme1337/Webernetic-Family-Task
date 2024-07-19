const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded( { extended: false } ))

app.get('/', (req, res) => {
    res.render('main');
});

const PORT = 3000;
const HOST = 'localhost';

app.listen(3000, () => {
    console.log(`Server started: http://${HOST}:${PORT}`); 
});