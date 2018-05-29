module.exports = function(res, req, next){
    if (!req.session.user) (
        req.session.user = { username: '', cart: [], total: 0 }
    )
    next()
}