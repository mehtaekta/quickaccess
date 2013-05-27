exports = module.exports = function authenticateRequest() {
	// console.log('authenticateRequest#############');
	var noAuthRequest = [
			'auth/login',
			'api/login',
			'/authenticated'
		];

	var _excludeRequestFromAuthen = function(url){
		 for(var i =0,l=noAuthRequest.length;i<l;i++){ 
			var path = noAuthRequest[i];
			if (url.toLowerCase().indexOf(path.toLowerCase()) > -1 ){
				return true;
			}
		}
		return false;
	}

	return function authenticateRequest(req, res, next) {
		// console.log('authen', req.url); 
		var exclude = _excludeRequestFromAuthen(req.url);
		// console.log('req.session', req.session);
		if(exclude || (req.session.user)) {
			return next();
		} else {
			console.log('authenticateRequest', '401 error');
			return next();
			// res.json({},401);
			// res.render('/auth/login');
			
			// res.json({view:'login'});
			//next(new Error('401'));
			// res.render('login.html');
		}    	
	}
};
