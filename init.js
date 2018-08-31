var express = require('express');
var app = express();

app.get("/", function(req, res){
    res.send("<h2>NodeJS Express server by sinilya</h2>");
});

app.get("/db", function(req, res){

});

var server = app.listen(3000, function(){
	console.log("Server started on port " + server.address().port);
});