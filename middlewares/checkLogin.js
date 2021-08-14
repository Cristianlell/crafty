const { usuarios } = require("../data/users_db");
function checkLogin(req,res,next) {
    res.locals.isLogged = false
    
    let emailFromCookie = req.cookies.userEmail;
    console.log("email: ",emailFromCookie)
    let userCheckCookie = usuarios.find(user=> user.email === emailFromCookie)
    
    if (userCheckCookie) {
        req.session.userLog = userCheckCookie
    }
    
    if (req.session.userLog) {
        res.locals.isLogged= true;
        res.locals.userLog = req.session.userLog
    }
    next()
}

module.exports= checkLogin;