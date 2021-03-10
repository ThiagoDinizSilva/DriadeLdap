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
    type: String,
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
  
  //create and fill array with each schema prop
  let schemaProps = []
    for (var key in schema) {
      var value = schema[key]
      schemaProps.push(value.prop);
    }
  //counter to access every element
  i=0
  rows.forEach(element => {
    if(schemaProps.every(prop => element.hasOwnProperty(prop))){
      i++
    } else{
      //rows.splice(i,1)
    }

    console.log(errors)

  })

})
} module.exports = teste