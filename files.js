

const fs = require('fs');
// reading files

// fs.readFile('./docs/abc.txt',(err,data) =>{
//     if (err)
//     {
//         console.log(err);

//     }
//     // data is in buffer format so need to convert to string
//     console.log(data.toString());
// })

// writing files
// if file is there it will change all of its content 
// else it will create one if it doesn't exist'

// fs.writeFile('./docs/abc2.txt','heya i created this file',() =>{
//     console.log('file created')
// })

// adding removing directories
// if (!fs.existsSync('./createdFolder'))
// {fs.mkdir('./createdFolder', (err) =>{
//     if (err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log('created')
//     }
// })}else{
//     fs.rmdir('./createdFolder', (err) =>{
//         if (err)
//         {
//             console.log(err)
//         }
//         else
//         {
//             console.log('deleted')
//         }
//     })
// }

// deleting files
// if (fs.existsSync('./docs/abc2.txt'))
// {
//     // this how we delete files 
//     fs.unlink('./docs/abc2.txt',(err)=>{
//         if (err)
//         {
//             console.log(err)
//         }
//         else{console.log('deleted file')}
//     })
// }



