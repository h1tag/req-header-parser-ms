var express = require('express');
var app = express();
var ua = require('ua-parser');
var path = require("path");
var http = require("http");

app.get('/', function(req, res){
	var ip = req.headers['x-forwarded-for'];
  	var ip_array = ip.split(',');
	
	var lang = req.acceptsLanguages()[0];
	var os = ua.parse(req.headers['user-agent']).os.toString();

	var obj = {
		ipaddress: ip_array[0],
		language: lang,
		os: os
	};

	res.json(obj);
});

app.listen(3000); // you'll need to change the port number according to the environment you run the app in