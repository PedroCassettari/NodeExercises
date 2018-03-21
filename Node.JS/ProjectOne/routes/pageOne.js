module.exports = function(app){
	app.get('/pageOne', function(req,res){
		res.render('PageOne/page1');
	});
};