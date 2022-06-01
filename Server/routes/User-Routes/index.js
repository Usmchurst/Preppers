const { User } = require('../../models');

const router = require('express').Router();
  
router.post('/login', (req, res) => {
    console.log(req.body);    
    res.json({ status: 'ok' });
});

module.exports = router