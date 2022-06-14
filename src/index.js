const express = require('express');

const app = express();

app.use('/static', express.static('public'))