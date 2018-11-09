"use strict";

const http = require("http"); //HTTP Module.

const port = 8081; //Port Number to be used.

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   const msg = "Hello World!\nPowered by Node.js ".concat(process.version);
   response.end(msg);

}).listen(port);

console.log(`You may now run any browser with http://127.0.0.1:${port} to view this Web Application...`);
console.log("To stop this application, please close this window.");