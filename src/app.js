const express = require('./controllers/express')
const app = express()
const path = require('path');

//const config = require('config')
const router = require('./router/index')

    app.use('/api', router)
    app.use('/assets',express.static(path.join('./src/views/dashboard/assets/')));
    app.use('/vendor',express.static(path.join('./src/views/login/vendor/')));
    app.use('/fonts',express.static(path.join('./src/views/login/fonts/')));
    app.use('/css',express.static(path.join('./src/views/login/css/')));
    app.use('/js',express.static(path.join('./src/views/login/js/')));
    app.use('/images',express.static(path.join('./src/views//login/images/')));
    app.set('/vendor','../public/login/vendor/')


    //app LISTEN
    app.listen(3000, function(){
        console.log("server is listening on port: 3000");
    });