const multer = require('multer')
const path = require('path');

exports.fileAuth = () => {
    storage = multer.diskStorage({
        destination: (req, file, cb) => {
            // cb(null, '/uploads')
            cb(null, path.join(__dirname, '../uploads'));
        },
        filename: (req, file, cb) => {
            const suffix = Date.now();
            cb(null, suffix + '-' + file.originalname)
        }
    })
    const upload = multer({ storage })
    return upload;
}
