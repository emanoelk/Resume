var express = require("express");
var app = express();
var mongojs = require('mongojs');
var db = mongojs('personalinfo',['personalinfo']);
var bodyParser = require("body-parser");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.get('/personalinfo', function (req,res){
	console.log("i recieved a get request");
	
	db.contactlist.find(function (err,docs){
		console.log(docs);
		res.json(docs);
	});

	
});

app.listen(8080);

console.log("server running on port 8080");

