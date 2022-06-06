import React, { useEffect, useState } from 'react';
import auth from '../utils/auth';
import { getMe } from '../utils/user';
import Avatar from '@mui/material/Avatar';
import LikeButton from './LikeButton/LikeButton';
import { borderBottom, borderRadius } from '@mui/system';
const styles = {
  box:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "column",
    width: "100vw",
    heigh: '100vh',
    position: 'relative',
  },
  card: {
    margin: "25px 0",
    background: '#3699eb',
    width: "40vw",
    height: '20rem',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'space-between',
    borderRadius: '15px',
    boxShadow: '0 0 15px black'
  },

  name: {
    fontWeight: 'bolder',
  },

  username:{
   textAlign: 'center',
    fontSize: '30px',
    borderBottom: '1px solid black',
    width: '100%'
  },

  postName:{
    postition: 'absolute',
   
  },

  postBody:{

  }


}
 function Homepage() {
  
    const [userData, setUserData] = useState({});
    const [posts, setPosts] = useState([]);

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
      
      function addLike(event) {
      let po = posts
      console.log(po)
        
      };
    return (
      <div>
        <div style={styles.box}>
          <div style={styles.name}>
            <h1>Hello {userData.username}</h1>
          </div>
          <div style={styles.inBox}>
            {posts.map((post) =>{
              return(
              <div style={styles.card}>
                <div style={styles.username}>
                {post.username}
                </div>
                <div  style={styles.postname}>
                  {post.postName}
                </div>
                <div  style={styles.body}>
                {post.postBody}
                </div>
                <div>
                <LikeButton onClick={addLike()}/>
                </div>
              </div>
            )})
          }
          </div>
    </div>
    </div>
  )  
};

export default Homepage
