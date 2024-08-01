const { people, ages } = require('./people');  // "./" represents look in the file of same directory

console.log(people, ages);   //abc is an empty object

const os = require('os');

console.log(os.platform(), os.homedir());