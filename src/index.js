const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const router = require('./routes.js');

const dbUrl = 'mongodb://localhost:27017/cubeApp'
const app = express();

app.use('/static', express.static('public'))
app.use(cookieParser());
app.use(express.urlencoded({
    extended: false
}))

require('./config/handlebars.js')(app);


app.use(router)


mongoose.connect(dbUrl).then(() => {
    console.log('Connected to DB!');
}).catch(() => {
    console.log('Couldnt connect to DB!');
})
app.listen(5000);