const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true
      },
      email: {
        type: String,
        required: true,
        match: /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,
        unique: true
      },
      password:{
        type: String,
        required: true,
        minlength: 8
      },
      Posts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Post',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
      ],
    },
    {
      toJSON: {
        virtuals: true,
      }
    }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});


  
const User = model('User', userSchema);
  
module.exports = User;
  