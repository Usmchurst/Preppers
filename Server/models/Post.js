const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const postSchema = new Schema(
    {
      postName: {
        type: String,
        required: true,
        unique: true
      },
      imgUrl: {
        type: String,
      },
      postBody:{
        type: String,
        required: true,
        max_length: 280
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      username: {
        type: String,
        required: true
      },  
     comments: [commentSchema],
    },
    {
      toJSON: {
        virtuals: true,
      }
    }
);

postSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});


  
const Post = model('post', postSchema);
  
module.exports = Post;
  