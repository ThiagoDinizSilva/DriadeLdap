const formidable = require('formidable');
const fs = require('fs');
const form = formidable()
const uploadError = require('../models/error')
form.uploadDir= './src/public/uploads/'

//Call if you want to upload a file
function uploadFile(file) {
  return new Promise((resolve,reject) => {
//form.parse is the default method that we override those
//parts that we are interested in manipulate with form.on and form.once
    form.parse(file)
    form.once('error', console.error)
    form.on('fileBegin', (filename, file) => {
    })
//AFTER the "file" ended up upload at our server      
    form.on('file', (filename, file) => {
//if a user tried to upload no file and delete it with fs.unlink      
      if(!file.name){
        fs.unlink(file.path,(err => {
          if (err) console.log(err)}))
        reject("oops something went wrong")
      }
//if the file exists and matches the correct extension (*.xlsx at our case)
      if (file.name && file.name.match(/\.(xlsx)$/i)){
//rename the file so parseExcelFile could use it 
        fs.rename(file.path,'./src/public/uploads/' + 'data.xlsx',(err => { 
          if (err) reject("oops, something went wrong!")}))
        resolve("ok, file accepted");
      }else{
        reject("Wrong file type")
        fs.unlink(file.path,(err => {
          if (err) console.log(err)}))
      }
    })

    form.once('end', () => {      
    })
    

  })
    
    

} module.exports = uploadFile
