
/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log('Index');
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  console.log('partials', name);
  res.render('partials/' + name);
};