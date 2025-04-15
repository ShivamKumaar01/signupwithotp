const router = require('express').Router();
const { authController } = require('../controllers');
const{ mailauth } =require('../middleware') 

router.post('/signup',mailauth.sendMailerFunction, authController.createUser)
router.post('/login', authController.loginUser)

module.exports = router;