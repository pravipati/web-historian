var http = require("http");
var handler = require("./request-handler");
var initialize = require("./initialize.js");
var archive = require("../helpers/archive-helpers.js")

// Why do you think we have this here?
// HINT:It has to do with what's in .gitignore
initialize();

var port = 8080;
var ip = "127.0.0.1";
var server = http.createServer(handler.handleRequest);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);
<<<<<<< HEAD
server.on('request', function(request, response){
  debugger;
  handler.handleRequest(request, response);
});
=======
archive.isURLArchived('www.microsoft.com');
// server.on('request', function(req, res){
//   console.log(req);
// });
>>>>>>> 08099b388e3f7fe60a58453a66d3f0277ef8e02e
