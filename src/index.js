const {
    urlencoded
} = require('express');
const express = require('express');
const handlebars = require('express-handlebars');
const router = require('./routes.js');
const mongoose = require('mongoose');

const app = express();
app.use('/static', express.static('public'))
app.use(express.urlencoded({
    extended: false
}))

require('./config/handlebars.js')(app);


app.use(router)

app.listen(5000);