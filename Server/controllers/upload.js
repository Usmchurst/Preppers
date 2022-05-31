const cloudinary = require('../config/cloudinary');
const path = require('path')

const imgUpload = (req,res) => {
    cloudinary.uploader.upload(path.join(__dirname,'../public/photo.png'),
    function(error, result) {
        if(error) {
            res.send(error);
        } else {
            res.status(200).send(result)
        }
    })
};

module.exports = { imgUpload }