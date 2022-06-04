const router = require('express').Router();

// const { imgUpload } = require('../controllers/upload')

const user = require('./User-Routes')
const home = require('./Home-Routes')

router.use('/user', user )
router.use('/home', home )

// router.post('/imgUpload', imgUpload )


module.exports = router;