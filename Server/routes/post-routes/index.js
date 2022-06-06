const router = require('express').Router();
require('dotenv').config()
const {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
  addReaction,
  removeReaction,
} = require('../../controllers/post');
const cloudinary = require('../../config/cloudinary')

router.post('/', async (req, res) => {
    const {image} = req.body;
    const uploadedImage = await cloudinary.uploader.upload(image,
  { 
      upload_preset: 'unsigned_upload',
  }, 
  function(error, result){
      if(error){
          console.log(error);
      }});
      
      try{
          res.status(200).json(uploadedImage)
      } catch(error){
          console.log(error);
      }
  })

  router.route('/posts').get(getPosts).post(createPost);

module.exports = router