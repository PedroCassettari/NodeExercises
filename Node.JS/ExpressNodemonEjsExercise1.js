var express = require("express")();

express.set('view engine','ejs');

express.get('/', function(requires, response){
	response.render("index");
});

express.get('/nodemon', function(require,response){
	response.render("nodemon");
})

express.listen(3000, function(require,response){
	console.log("Project running through Express + EJS + Nodemon");
})