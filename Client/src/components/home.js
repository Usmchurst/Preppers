import React, { useEffect, useState } from 'react';
import auth from '../utils/auth';
import { getMe } from '../utils/user';

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
        </div>
    )
};

export default Homepage