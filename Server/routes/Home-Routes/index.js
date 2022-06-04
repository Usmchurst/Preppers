const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { User } = require('../../models');

router.get('/', async (req, res) => {
    const token = req.headers['x-access-token']
    try{
        const decode = jwt.verify(token, 'secret123')
        const email = decode.email
        const user = await User.findOne({ email: email})

        return res.json({status: 'ok', user: user.username})
    } catch(err) {
        console.log(err)
    }
})

module.exports = router