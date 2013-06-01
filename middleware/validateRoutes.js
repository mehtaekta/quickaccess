var mongoDB = require('../business/mongoDB'),
	helper = require('../business/helper');
exports = module.exports = function validateRoutes() {
	return function authenticateRequest(req, res, next) {
		next();
	}
}