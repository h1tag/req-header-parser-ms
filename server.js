var express = require('express');
var app = express();

app.get('/', function(req, res){
	console.log(process.platform);
	console.log(req.headers);
	console.log(req.ip);

	var ip = req.ip;
	var lang = req.headers["accept-language"];
	var os = process.platform;

	var obj = {
		ipaddress: ip,
		language: lang,
		os: os
	};

	res.json(obj);
});

app.listen(3000);