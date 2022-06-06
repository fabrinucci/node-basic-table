const argv = require('yargs')
      .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'It is the base of the multiplication table'
      })
      .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Displays the table in the console'
      })
      .option('t', {
        alias: 'to',
        type: 'number',
        default: 10,
        describe: 'Set what will be the limit number.'
      })
      .check(( argv, options ) => {
        if( isNaN(argv.b) ) {
          throw 'The Base must be a number'.red.bold;
        }
        return true
      })
      .argv; 

module.exports = {
  argv
}