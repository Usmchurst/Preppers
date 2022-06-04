const { User } = require('../models')

const { signToken } = require('../utils/auth');

module.exports = {
    
    async createUser(req, res) {
      
            const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        
        if (!user) {
            return res.status(400);
        }
        const token = signToken(user);

       return res.json({ token, user, status: 'ok' });
      
    },

    async login(req, res) {
        
            const user = await User.findOne({ email: req.body.email });
            
            if (!user) {
            return res.status(400);
            }
        
            const correctPw = await user.isCorrectPassword(req.body.password);
        
            if (!correctPw) {
            return res.status(400);
            }
            const token = signToken(user);
            res.json({ token, user });
        
    },
    
    async getSingleUser({ user = null, params }, res) {
      
        const foundUser = await User.findOne({email: user ? user.email : params.email });
        
        if (!foundUser) {
          return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }
    
       return res.json(foundUser);       
      },
}
