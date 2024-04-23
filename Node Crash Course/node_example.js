// Creating Web Server
console.log("\n *** Creating Web Server *** \n")

// const http = require('http');
// const { hostname } = require('os');

// const HOSTNAME = process.env.HOSTNAME || "localhost";

// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res)=> {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello World!");
// })

// server.listen(PORT, HOSTNAME, ()=> {
//     console.log(`Server is running at http://${HOSTNAME}:${PORT}/`);
// })


// Global Properties
console.log("\n *** Global Properties *** \n")

// console.log(global.process.env);
// console.log(__dirname);
// console.log(__filename);



// File System Modules
console.log("\n *** Reading Files *** \n")

const fs = require('fs');
// const { readFile, readFileSync } = require('fs');

// Asynchronous Version, By-Default
// fs.readFile('hi.txt', 'utf-8', (err, data)=> {
//     if(err) {
//         console.error(err);
//         return;
//     }

//     console.log(data);
// })

// console.log("The Boss\n");

// // Synchronous Version
// try {
//     const data = fs.readFileSync('hi.txt');

//     console.log(data.toString());
// } catch(err) {
//     console.error(err);
// }

// console.log("The Boss 2\n");


console.log("\n *** Writing Files *** \n");
// const { writeFile, writeFileSync } = require('fs');

// Overwrite (not append)
const newContent = "This is the new Content";
// fs.writeFile('hi.txt', newContent, (err)=> {
//     if(err) {
//         console.error(err);
//         return;
//     }

//     console.log("Content Written");
// })

// try {
//     fs.writeFileSync('hi.txt', newContent);
//     console.log("Content Written");
// } catch(err) {
//     console.error(err);
// }

// Append into File
// WAY :: 01
// fs.writeFile('hi.txt', newContent, {flag: 'a'}, (err)=> {
//     if(err) {
//         console.error(err);
//         return;
//     }
//     console.log("Content Written");
// })

// const { appendFile } = require('fs');

// appendFile('hi.txt'. newContent, (err)=> {
//     if(err) {
//         console.error(err);
//         return;
//     }

//     console.log("Content Written");
// })



console.log("\n *** Rename & Delete Files *** \n");

// const { rename } = require("fs");

// rename('hi.txt', 'hello.txt', (err)=> {
//     if(err) {
//         console.error(err);
//         return;
//     }

//     console.log("File Renamed");
// })

// const { unlink } = require("fs");

// unlink('hello.txt', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log("File Deleted");
// })




// Export / Import Modules
console.log("\n *** Export / Import Modules *** \n")

// --> Without using ejs6.0 syntax
// const addNums = require('./addNums');

// const sum = addNums(2, 2);
// console.log(sum);

// --> Using ejs6.0 syntax
// import { addNums } from './addNums.mjs'

// const sum = addNums(2, 2);
// console.log(sum);







