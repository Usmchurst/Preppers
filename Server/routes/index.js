const router = require('express').Router();

// const { imgUpload } = require('../controllers/upload')

const user = require('./User-Routes')

router.use('/user', user )

// router.post('/imgUpload', imgUpload )


module.exports = router;