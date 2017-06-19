var express = require('express');
var app = express();

app.get('/', function(req, res){
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