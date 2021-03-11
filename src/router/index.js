const router = require('express').Router()
const uploadFile = require('../services/uploadFile');
         
   router.get('/login',(req, res, next) => {
    res.sendFile('index.html',{ root: './src/views/login/' });
   })

   router.get('/dashboard',(req, res, next) => {
       res.sendFile('dashboard.html',{ root: './src/views/dashboard/' })
   })

   router.get('/error',(req, res, next) => {
       res.sendFile('index.html',{ root: './src/views/error/' })
   })

   router.post('/upload',async (req,res,next) => {
    try{
       await uploadFile(req)
       .then(function(a){
        res.JSON(a)})
       .catch(function(a){
        res.send(a)})

       res.status(200)
       //res.send("ok, promisse resolved")
    }catch(err){
    res.status(400)
    console.log(err)
    res.send("promisse rejected")
    }  
       console.log("end router")
    })

   module.exports = router