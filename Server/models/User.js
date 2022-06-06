const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
        match: /.+@.+\..+/,
        unique: true
      },
      password:{
        type: String,
        required: true,
        minlength: 8
      },
      profilePhotoUrl:{
        type: String,
      },
      posts: [
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

userSchema.virtual('postCount').get(function () {
  return this.posts.length;
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

  
const User = model('User', userSchema);
  
module.exports = User;
  