var app = require('./config/server')();
//var index = require('./routes/home')(app);
//var pageOne = require('./routes/pageOne')(app);

app.listen(3000, function(){
	console.log("Server ON");
});