const { Post, User } = require('../models');

const postController = {
  // get all posts
  getPosts(req, res) {
    Post.find()
      .sort({ createdAt: -1 })
      .then((dbPostData) => {
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // get single post by id
  getSinglePost(req, res) {
    Post.findOne({ _id: req.params.postId })
      .then((dbPostData) => {
        if (!dbPostData) {
          return res.status(404).json({ message: 'No post with this id!' });
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // create a post
  createPost(req, res) {
    Post.create(req.body)
      .then((dbPostData) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { posts : dbPostData._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'post created but no user with this id!' });
        }

        res.json({ message: 'post successfully created!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // update post
  updatePost(req, res) {
    Post.findOneAndUpdate({ _id: req.params.postId }, { $set: req.body }, { runValidators: true, new: true })
      .then((dbPostData) => {
        if (!dbPostData) {
          return res.status(404).json({ message: 'No Post with this id!' });
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // delete post
  deletePost(req, res) {
    Post.findOneAndRemove({ _id: req.params.postId })
      .then((dbPostData) => {
        if (!dbPostData) {
          return res.status(404).json({ message: 'No Post with this id!' });
        }

        // remove post id from user's `posts` field
        return User.findOneAndUpdate(
          { posts: req.params.postId },
          { $pull: { posts: req.params.postId } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'post created but no user with this id!' });
        }
        res.json({ message: 'post successfully deleted!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // add a reaction to a post
  addComment(req, res) {
    Post.findOneAndUpdate(
      { _id: req.params.postId },
      { $addToSet: { comments: req.body } },
      { runValidators: true, new: true }
    )
      .then((dbPostData) => {
        if (!dbPostData) {
          return res.status(404).json({ message: 'No Post with this id!' });
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // remove reaction from a Post
  removeComment(req, res) {
    Post.findOneAndUpdate(
      { _id: req.params.postId },
      { $pull: { comments: { commentId: req.params.commentId } } },
      { runValidators: true, new: true }
    )
      .then((dbPostData) => {
        if (!dbPostData) {
          return res.status(404).json({ message: 'No Post with this id!' });
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = postController;