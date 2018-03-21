module.export = function(app){
	app.get('/', function(req,res){
		res.render('Home/index');
	})
};