require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const ejs = require('ejs');

const log = console.log;
const port = process.env.PORT;
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'public/views');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(logger('combined'));

app.get('/',  (req, res) => {
    res.render('index');
})

app.post('/band/name', (req, res) => {
    const {cityName, petName} = req.body;

    const message = `Your Band Name Could Be ====  ${cityName} - ${petName}`
    res.render('band', {message})
})




app.listen(port, () => {
    log(`Server is running on port ${port}.`)
})