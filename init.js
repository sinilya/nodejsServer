var express = require('express');

var app = express();

app.get("/", function(request, response){
    response.send("<h2>NodeJS Express server by sinilya</h2>");
});

app.listen(3000);