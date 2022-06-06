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
          console.log(userData)
        };
    
        getUserData();
      }, [userDataLength]);

   
   
    return (
        <div className='profileBody'>
           
           
           <div class="container mt-5">
    
    <div class="row d-flex justify-content-center">
        
        <div class="col-md-7">
            
            <div class="card p-3 py-4">
                
                <div class="text-center">
                    <img src="https://i.imgur.com/bDLhJiP.jpg" alt="profile" width="100" class="rounded-circle" /> 
                </div>
                
                <div class="text-center mt-3">
                  
                    <h5 class="mt-2 mb-0">Alex Jones</h5>
                    
                    
           <h2>{userData.friendCount} Friends:</h2>
           <h2>Email: {userData.email}</h2>
           <h2>{userData.postCount} Posts</h2>
            <div>      
              
            </div>
                    
                    
                    
                     
                    
                </div>
                
               
                
                
            </div>
            
        </div>
        
    </div>
    
</div>
           {/* <div>      
               {userData.posts.map(({postName, imageUrl,  postBody, createdAt,  username}, index) => (
                    

                       
                  ))}
            </div> */}
        </div>
    )
};

export default Profile