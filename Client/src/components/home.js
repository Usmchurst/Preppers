import React, { useEffect, useState } from 'react';
import auth from '../utils/auth';
import { getMe } from '../utils/user';
import Avatar from '@mui/material/Avatar';
import LikeButton from './LikeButton/LikeButton';

 function Homepage() {
  
    const [userData, setUserData] = useState({});
    const [posts, setPosts] = useState([])

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
      
        async function getAllPosts(){
          
           const data = await fetch('http://localhost:3001/post/posts',{
            headers: {
              'Content-Type': 'application/json',
            },
          })
          if (!data.ok) {
            throw new Error('something went wrong!');
          }
          const items= await data.json();
          setPosts(items);
        
        }
        getUserData();
        getAllPosts();
      }, [userDataLength]);
      console.log(posts)
    return (
      
        <div>
            <h1>hello {userData.email}</h1>
       {posts.map((post) =>{
         return(
        <div>
          {post.username}
          <div>
            {post.postName}
          </div>
          <div>
          {post.postBody}
          </div>
          <div>
          <LikeButton/>
          </div>
        </div>
       )})
     }


    </div>
  )  
};

export default Homepage