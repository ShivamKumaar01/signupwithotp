const router = require('express').Router();
const { authController } = require('../controllers');
// const{ mailauth } =require('../middleware') 
// mailauth.sendMailerFunction
router.post('/signup', authController.createUser)
router.post('/login', authController.loginUser)

module.exports = router;