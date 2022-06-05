import React, { useEffect, useState } from 'react';
import auth from '../utils/auth';
import { getMe } from '../utils/user';
import Avatar from '@mui/material/Avatar';

 function Homepage() {
  
    const [userData, setUserData] = useState({});

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

   
   
    return (
      
        <div>
            <h1>hello {userData.email}</h1>
            
    
      
     {/* {
       userData.posts.map(post => (
        <div className="post">
        <div className="post_header">
            
        <Avatar
        className="post_avatar"
        alt='Steve'
        src="/static/images/avatar/1.jpg"
       />     
        <h3>{}</h3>
        </div>
       {/* { Header, avatar, username}  */}
       {/* <img className="post_image" src={} alt=""/> */}
       
        {/* <h4 className="post_text"><strong>{}</strong> {} </h4>
       
    </div>
       ))
     } */} 


    </div>
  )  
};

export default Homepage