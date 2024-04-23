// Creating Web Server
const http = require('http')
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const HOSTNAME = process.env.HOSTNAME || "localhost";

const server = http.createServer((req, res)=> {
    // console.log(req.url, req.method);

    res.setHeader("Content-Type", "text/html");

    let path = './';

    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += "about.html";
            res.statusCode = 200;
            break;
        default:
            
            // Redirecting to home
            // res.setHeader("Location", "/");
            // res.statusCode = 301;
            
            res.statusCode = 404;
            path += '404.html';
            break;
    }

    fs.readFile(path, (err, data)=>{
        if(err) {
           console.error(err);
            res.end();
        } else {
            res.end(data);
        }
    });

    res.write("<h1> Hello World </h1>");
    // res.end("<h5> The End!!! </h5>")
})

server.listen(PORT, HOSTNAME, ()=> {
    console.log(`Server is running at http://${HOSTNAME}:${PORT} `);
})