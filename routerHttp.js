
// Router HTTP / HTTPS
let mobile = require('is-mobile');

module.exports = function(app, redT) {
	//Home
	app.get('/', function(req, res) {
		if (mobile({ua:req})){
			return res.redirect('/mobile');
		} else {
			return res.redirect('/web');
		}
	});

	// Sign API
	require('./routes/api')(app, redT);  // load routes API
};
