const colors = require('colors');
const { createFilePromise, createFileAsync } = require('./helpers/multiplication');
const { argv } = require('./config/yargs');


console.clear();

createFilePromise( argv.b, argv.l, argv.t )
  .then( nameFile => console.log(colors.bold.underline.magenta(nameFile, 'created')))
  .catch( err => console.log(err) )

// createFileAsync( argv.b )
//   .then( nameFile => console.log(nameFile, 'created'))
//   .catch( err => console.log(err))