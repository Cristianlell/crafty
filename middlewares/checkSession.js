function checkSession(req,res,next) {
    
    if (req.session.userLog) {
        next()
    } else {
        return res.redirect('/users/login')
    }
}

module.exports= checkSession;