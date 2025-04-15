const router = require('express').Router();
const { multerAuth } = require('../middleware');
const { userProfileController } = require('../controllers');

router.put('/profile', multerAuth.fileAuth, userProfileController.insertImage)

module.exports = router;