const { User } = require('../../models');

const router = require('express').Router();
  
router.post('/login', async (req, res) => {
    try{
        console.log(req.body);    
    res.json({ status: 'ok' });
    } catch(err) {

    };
});
 
module.exports = router