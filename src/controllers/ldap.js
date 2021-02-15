const express = require('express');
const app = express.Router();
const path = require('path')


// respond with "hello world" when a GET request is made to the homepage
app.get('/ldap', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../','index.html'))
})



// POST method route
app.post('/ldap', function (req, res) {
    res.send('POST')
  });

  module.exports = app