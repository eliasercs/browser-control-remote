// repaso nodejs
// https://www.youtube.com/watch?v=BhvLIzVL8_o&t=1054s
// paquetes https://www.npmjs.com

/*const http =require("http");

const colors=require("colors");

const handleServer= function (req,res) {
    res.writeHead(200,{"content-type":"text/html"});
   res.write("<h1>Repaso nodejs</h1>");
   res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log("server on port 3000".green);
    console.log("server on port 3000".yellow);
});
*/

// nodejs con express
const express = require("express");
const colors = require("colors");

const server= express();

server.get("/", function (req,res) {
    res.send("<h1>hola mundo por express y nodejs</h1>");
    res.end();
});

server.listen(3000,function () {
    console.log("server in port 3000".red);
});