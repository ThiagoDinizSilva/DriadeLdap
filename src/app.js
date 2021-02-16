const express = require('express');
const http = require('http');
const path = require("path");
const bodyParser = require('body-parser');
const index = require('./routes/index');
const login = require('./routes/login');
const register = require('./routes/register');
const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')));
app.get('/',index.get)
app.post('/register',register.post)
app.post('/login',login.post)







server.listen(3000, function(){
    console.log("server is listening on port: 3000");
});