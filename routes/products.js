const express = require('express');
const router = express.Router();
const {add,detail, search,save,edit,update,remove} = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');

const addProductValidator = require('../validations/addProductValidator');
//session
const checkSession = require('../middlewares/checkSession')

const storage = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'public/images')
    },
    filename : (req,file,callback) => {
        callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage,
})

/* /products */
router.get('/add',add);
router.post('/add',upload.single('image'), addProductValidator,save);
router.get('/detail/:id',detail);
router.get('/search',search);
router.get('/edit/:id',edit);
router.put('/edit/:id',update);
router.delete('/remove/:id',remove);

module.exports = router;