import React, { useEffect, useState } from 'react';
import auth from '../utils/auth';
import { getMe } from '../utils/user';
import axios from 'axios';
import Img from './image'

 function PostForm() {
    const [postName, setPostName] = useState('')
    const [postBody, setPostBody] = useState('')
    const [userData, setUserData] = useState({});
    const [file, setfile] = useState('');
    const [image, setImage] = useState('');
    const [uploadedImage, setUpload] = useState('');

    const userDataLength = Object.keys(userData).length;

    useEffect(() => {
        const getUserData = async () => {
       
          try {
          
            const token = auth.loggedIn() ? auth.getToken() : null;
            
            if (!token) {
              return false;
            }
    
            const response = await getMe(token);
          

            if (!response.ok) {
              throw new Error('something went wrong!');
            }
            const user = await response.json();
            setUserData(user);
            
          } catch (err) {
            console.error(err);
          }
        };
    
        getUserData();
      }, [userDataLength]);

      function previewFiles(file){
        const reader = new FileReader(file);
        reader.readAsDataURL(file)

        reader.onloadend = ()=>{
          setImage(reader.result)
        }

      };

      async function handleSubmit(e){
        e.preventDefault()
        const result = await axios.post("http://localhost:3001/post", {
          image: image
        })
        try{
          const uploadedImg = result.data.public_id
          setUpload(uploadedImg)
        } catch(err){
          console.log(err)
        }
      };

      function handleChange(e){
        const file = e.target.files[0];
        setfile(file)
        previewFiles(file);
      };
      
      async function createPost(e){
        e.preventDefault();

        if(postName === " " || postBody === " ") {
          alert('Please add post information')
        } else {
           await fetch('http://localhost:3001/post/posts',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        userId: userData._id,
        postName, 
        imageUrl: uploadedImage.publicID,
        postBody, 
        username: userData.username
      })
    })
      }
    }

    return (
    <div className="form">

        <label htmlFor='title'>Post title</label>
        <input type="text" 
        id="title" 
        onChange={(e) => setPostName(e.target.value)}
        required
        value={postName}
        />
        <br/>

        <label htmlFor='title'>Post body</label>
        <input 
        type="text"
         id="title" 
         onChange={(e) => setPostBody(e.target.value)}
         required
         value={postBody}
         />
       

      <form onSubmit={e=> handleSubmit(e)}>
          <label htmlFor='fileInput'>Upload Image</label>
          <input type="file" id="fileInput" onChange={e=> handleChange(e)} required
          accept='image/png, image/jpeg, image/jpg, image/jfif' />
          <button>upload Photo</button>
        </form>
      <Img uploadedImage={uploadedImage} />

      <button onClick={createPost}>Create Post</button>

    </div>
    )
};

export default PostForm