module.exports = function(req, res, next) {
    if(!req.user) return res.statuss(401).json('Unauthorized');
    next();
}