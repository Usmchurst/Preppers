const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'djx2xc8ge', 
    api_key: '876991416153854', 
    api_secret: 'S4TV8zV7M-mq5Gc9bXfbzl6hpmk',
    secure: true
});

module.exports = cloudinary;
