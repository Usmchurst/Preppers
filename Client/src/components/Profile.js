import React, { useEffect, useState } from 'react';
import auth from '../utils/auth';
import { getMe } from '../utils/user';

 function Profile() {
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
        <div className='profileBody'>
           <h1>Hello {userData.username}</h1>
           <h2>{userData.friendCount} Friends</h2>
           <h2>Email: {userData.email}</h2>
           {/* <div>      
               {userData.posts.map(({postName, imageUrl,  postBody, createdAt,  username}, index) => (
                    

                       
                  ))}
            </div> */}
        </div>
    )
};

export default Profile