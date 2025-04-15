const router = require('express').Router();
const { multerAuth } = require('../middleware');
const { userProfileController } = require('../controllers');

router.put('/', multerAuth.fileAuth().single('image'), userProfileController.insertImage)

module.exports = router;