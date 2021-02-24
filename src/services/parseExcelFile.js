const readXlsxFile = require('read-excel-file/node');
var file = './src/public/uploads/data.xlsx'

function teste(params) {
  

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
  // `errors` have shape `{ row, column, error, value }`.
  errors.length === 0
  console.log(rows)
})

} module.exports = teste