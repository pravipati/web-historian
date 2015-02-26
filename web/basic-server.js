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
console.log(archive.isUrlInList('www.google.com'));
server.on('request', function(req, res){
  console.log(req);
});
