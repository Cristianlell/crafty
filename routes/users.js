var express = require('express');
var router = express.Router();

const {register,login, processRegister,processLogin, logout} = require('../controllers/usersController');
const registerValidator = require('../validations/registerValidator');
const loginValidator =require('../validations/loginValidator');

//session
const checkLogin = require('../middlewares/checkLogin')
/* GET users listing. */
router.get('/register' ,register);
router.post('/register', registerValidator, processRegister)
router.get('/login', login);
router.post('/login',loginValidator, processLogin)
router.get('/logout', logout);

module.exports = router;
