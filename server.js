// const http = require('http');
// const server = http.createServer((req,res)=>{
    // res is used to send response to the user
    // console.log(1)
    // url tells what comes after domain name 
    // console.log(req.url,req.method)

    // response header tells what type of response we are sending to browser
//     res.setHeader('Content-Type', 'text/html')
//     res.write('<head><link rel="stylesheet" href="#"></head>')
//     res.write('<h1>Hello my name is Jiraya</h1>')
//     res.write('<h2>The sage of Toad<h2>')
//     res.end()
// })
// cocnsole.log(a)
// we are listening for request on port 3000
// local host is a domain name
// 127.0.0.1

// server.listen(3000,'localhost',()=>{
//     console.log('listening to requests buddy')
// })


// easy method
const http = require('http')
const _ = require('lodash')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    console.log(_.random(0,10))

    res.setHeader('Content-Type', 'text/html')

    let path = './templates/'
    switch(req.url){
    case '/': 
        path+='index.html'
        res.statusCode = 200
        break
    case '/about': 
        path+='about.html'
        res.statusCode = 200
        break
    case '/about-me': 
        res.statusCode = 301
        res.setHeader('Location', '/about')
        res.end()
        break
    case '/juts':
        path+='jutsu.html'
        res.statusCode = 200

        break
    default:
        path+='404.html'
        res.statusCode = 400
    }
    console.log(path)
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log('-----')
            res.end()

        }else{
            // res.write(data)
            res.end(data)

        }
        // if we want to use write once we can pass it in end

    })
})

server.listen(3000,'localhost',()=>{
    console.log('listening to req')
})

// can install dependencies using npm install and itwill add all dependencies in package.json
