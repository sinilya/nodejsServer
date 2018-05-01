var express = require('express');
var couchbase = require('couchbase');

var cluster = new couchbase.Cluster('couchbase://127.0.0.1/'); 
cluster.authenticate('Administrator', 'testpassword');
var bucket = cluster.openBucket('testBucket');
var N1qlQuery = couchbase.N1qlQuery;

var app = express();

app.get("/", function(req, res){
    res.send("<h2>NodeJS Express server by sinilya</h2>");
});

app.get("/db", function(req, res){
	bucket.upsert('testdoc', {testField: "db is working!"}, function(err, result) {
		if(err){
			console.log(err);
		}

		bucket.get('testdoc', function(err, result) {
			if (err) {
				console.log(err);
			}

			console.log(result.value);
		});
	});
});

app.get('/close', function(req, res){
	console.log("Closing server...");
	server.close();
	process.exit();
})

var server = app.listen(3000, function(){
	console.log("Server started on port " + server.address().port);
});