const fs = require('fs');
const colors = require('colors');

const createFilePromise = async ( base = 5, list, to ) => {

  return new Promise((resolve, reject) => {
    
    let output = '';
    let consol = '';

    for (let i = 1; i <= to; i++) {
      output += `${ base } X ${ i } = ${ base * i }\n`;
      consol += `${ base } ${ 'X'.brightGreen } ${ i } ${ '='.brightGreen } ${ base * i }\n`;
    }

    if (list) {
      console.log('======================'.bold);
      console.log('    Table of:'.brightCyan, colors.brightGreen(base));
      console.log('======================'.bold);
      console.log(consol);
    }
    
    fs.writeFileSync(`./out/table-${ base }.txt`, output);
    resolve(`table-${ base }.txt`);
  }) 
}
    
const createFileAsync = async ( base = 5 ) => {

  try {
    
    console.log('======================');
    console.log('    Table of', base);
    console.log('======================');
    let output = ''

    for (let i = 1; i <= 10; i++) {
      output += `${ base } X ${ i } = ${ base * i }\n`;
    }

    console.log(output);

    fs.writeFileSync(`table-${ base }.txt`, output);
    return `table-${base}.txt`;
    
  } catch (err) {
      throw err;
  }
}


module.exports = {
  createFilePromise,
  createFileAsync,
}
