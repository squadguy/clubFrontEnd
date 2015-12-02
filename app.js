var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
//requires for checking connection to db
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

//configure app

app.set('view engine', 'ejs'); //needed for embedded js used in index.ejs
app.set('views', path.join(__dirname, 'views'));//ties view with directory views

//use middleware
app.use(express.static(path.join(__dirname, 'public')));//ties static files in views with bower_components directory
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//define routes

app.get('/', function(req, res){
	res.render('index', { }); 
	console.log('Got a hit!');
});


app.get('/about', function(req, res){
	res.render('about', { });
	console.log('Went to about');
});

app.get('/contact', function(req, res){
	res.render('contact', { });
	console.log('Went to contact');
});

app.get('/login', function(req, res){
	res.render('login', { });
	console.log('Went to login');
});


app.post('/auth', function(req, res){
	res.render('logsuccess', { });
	console.log(req.body.password);
});

app.listen(1337, function(){
	
	console.log('Server running');
	});

//implement test of db
var url = 'mongodb://localhost:27017/stuinfo';
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to server.");
	db.close();
});

