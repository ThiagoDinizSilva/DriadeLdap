const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use('/vendor/',express.static(path.join('./src/public/login/vendor/')));
app.use('/fonts/',express.static(path.join('./src/public/login/fonts/')));
app.use('/css/',express.static(path.join('./src/public/login/css/')));
app.use('/js/',express.static(path.join('./src/public/login/js/')));
app.use('/images/',express.static(path.join('./src/public/login/images/')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.set('/vendor','../public/login/vendor/')
module.exports = app


