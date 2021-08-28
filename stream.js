// streams
// it is like sending data to browser in packets known as buffers
// so can consider it like streaming 
let fs = require('fs');
// read streams
const readStream =fs.createReadStream('./docs/data1.txt',{encoding:'utf8'})

// write streams

const writeStream = fs.createWriteStream('./docs/data2.txt',{encoding:'utf8'})

// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk)
// })


// piping
readStream.pipe(writeStream)
