const express = require('express');
const handlebars = require('express-handlebars');
const router = require('./routes.js');
const mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:27017/cubeApp'
const app = express();
app.use('/static', express.static('public'))
app.use(express.urlencoded({
    extended: false
}))

require('./config/handlebars.js')(app);


app.use(router)


mongoose.connect(dbUrl).then(() => {
    console.log('Connected to DB!');
    app.listen(5000);
}).catch(() => {
    console.log('Couldnt connect to DB!');
})
