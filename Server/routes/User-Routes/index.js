const { User } = require('../../models');
const jwt = require('jsonwebtoken');

const router = require('express').Router();
  
router.post('/signup', async (req, res) => {
    try{
        await User.create({
           username: req.body.username,
           email: req.body.email,
           password: req.body.password,
       })
       res.json({ status: 'ok' });
    } catch(err) {
        res.status(404).send({ error: err});
    };
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({ 
        email: req.body.email,
         password: req.body.password,
    })

    if(user) {

        const token = jwt.sign(
        {   
            username: user.username,
            email: user.email,
        }, 'secret123')

        return res.json({ status: 'ok', user:token });
    } else {
        return res.json({ status: 'error', user:false });
    }
});
 
module.exports = router