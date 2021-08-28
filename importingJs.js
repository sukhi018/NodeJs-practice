
// const x = require('./test') //returns the empty object
// but when did with module.exports it get the data from the other file
// console.log(x)
// we can't access variables and methods in that other file

// const {name,age} = require('./test')
// console.log(name,age)

const os = require('os')  // this way we can also import already built in packages
console.log(os.platform(),os.homedir())