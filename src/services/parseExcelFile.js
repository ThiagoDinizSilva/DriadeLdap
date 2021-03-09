const readXlsxFile = require('read-excel-file/node');
const uploadFile = require('./uploadFile');

function teste(file) {
  

const schema = {
  'FIRST NAME': {
    prop: 'name',
    type: String
  },
  'SURNAME': {
    prop: 'surname',
    type: Number,
    required: true
  },
  'TITLE': {
    prop: 'title',
    type: String
  },
  'WAR NAME': {
        prop: 'warName',
        type: String
  },
  'IDT': {
    prop: 'idt',
    type: String,
    
  }
}

readXlsxFile(file, { schema }).then(({ rows, errors }) => {
  let test = ['name','title','warName','idt']
  i=0
  rows.forEach(element => {
    if(test.every(prop => element.hasOwnProperty(prop))){
    //if(element.hasOwnProperty('title')){
      console.log('have title')
      i++
    } else{
      console.log('does not have title')
      rows.splice(i,1)
      console.log(i)
    }
    
  });
  errors.length === 0
  
  console.log(rows)
})

} module.exports = teste