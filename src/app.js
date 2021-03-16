const express = require('./controllers/express')
const mongoose = require("mongoose");
const app = express()
const path = require('path')
const AuthRoute = require("./router/auth")
//const config = require('config')
const router = require('./router/index')
const cors = require('cors')
require('dotenv').config()

    app.use(cors())
    app.use(express.json());
    app.use("/auth/", AuthRoute);
    app.use('/api', router)
    app.use('/assets',express.static(path.join('./src/views/dashboard/assets/')));
    app.use('/vendor',express.static(path.join('./src/views/login/vendor/')));
    app.use('/fonts',express.static(path.join('./src/views/login/fonts/')));
    app.use('/css',express.static(path.join('./src/views/login/css/')));
    app.use('/js',express.static(path.join('./src/views/login/js/')));
    app.use('/images',express.static(path.join('./src/views//login/images/')));
    app.set('/vendor','../public/login/vendor/')
  
    mongoose
  .connect('mongodb://driade:driade@localhost:27017/driade', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongo database"))
  .catch((e) => console.error(e));

    //app LISTEN 
    app.listen(3001, function(){
        console.log("server is listening on port: 3001");
    });  