const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ username, email }) {
    const payload = { username, email };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};
