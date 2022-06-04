const router = require('express').Router();
const {
    createUser,
    login,
  } = require('../../controllers/user');
  
router.route('/signup').post(createUser);

router.route('/login').post(login);
 
module.exports = router