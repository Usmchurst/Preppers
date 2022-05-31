const router = require('express').Router();

const { imgUpload } = require('../controllers/upload')

router.post('/imgUpload', imgUpload )

module.exports = router;