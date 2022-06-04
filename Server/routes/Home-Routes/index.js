const router = require('express').Router();
const { getSingleUser,} = require('../../controllers/user');
  
const { authMiddleware } = require('../../utils/auth');

router.route('/me').get(authMiddleware, getSingleUser);

module.exports = router