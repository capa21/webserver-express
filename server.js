const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helper');

const port = process.env.PORT || 3000; //Recibe el puerto asignado por Heroku 

app.use(express.static(__dirname + '/public'));
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'jesús'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {});
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});