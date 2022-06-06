const router = require('express').Router();
const { Post } = require('../../models')
require('dotenv').config()
const {
  getPosts,
  createPost,
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

  router.put('/like', async (req, res) => {
    try {
        Post.findByIdAndUpdate(req.body.postId, { 
            $push:{likes: req.user._Id}

        },{
            new: true,
        })
        .then(res = res.json())
    } catch (err) {
        return res.json({error:err})
    }
    });

    router.put('/unlike', async (req, res) => {
        try {
            Post.findByIdAndUpdate(req.body.postId, { 
                $pull:{likes: req.user._Id}
    
            },{
                new: true,
            })
            .then(res = res.json())
        } catch (err) {
            return res.json({error:err})
        }
        });
        
    
  router.route('/posts').get(getPosts).post(createPost);

module.exports = router