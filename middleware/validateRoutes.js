var mongoDB = require('../business/mongoDB');
exports = module.exports = function validateRoutes() {
	return function authenticateRequest(req, res, next) {
		next();
	}
}