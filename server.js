var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;

var app = express();

// set static folder
app.use(express.static(path.join(__dirname, '/dist/angularclient')));
app.get('/*',function(req,res) {
	res.sendFile(path.joint(__dirname,'/dist/angularclient/index.html'));
});


app.listen(port, function() {
	console.log('Server started on port '+port);
});