const router = require('express').Router();

const user = require('./User-Routes')
const home = require('./Home-Routes')
const post = require('./Post-Routes')

router.use('/user', user )
router.use('/home', home )
router.use('/post', post )


module.exports = router;