var express = require('express');
var app = express();
var middleware = require('./middleware.js'); 

/*app.get('/',function(req,res){
	res.send('Hello world');
});*/

app.get('/about',middleware.requireAuthentication,function(req,res){
	res.send('about us');
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);
