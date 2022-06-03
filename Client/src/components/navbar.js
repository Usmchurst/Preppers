import React, { useEffect } from 'react';
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import jwt from 'jwt-decode'

export default function Navbar() {

    async function renderHome() {
        const req =  await fetch('http://localhost:3001/home', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            },
        })

        const data = req.json()
        console.log(data)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            if(!user) {
                localStorage.removeItem('token')
                window.location.assign('/login')
            } else {
                renderHome()
            }
        }
    }, []) 

    return (
        <div className="NavbarContainer">
        <div className="left">
             <div className="navbarLeft"></div>
                 <span className="logo">Preppers</span>
             <div className="navbarCenter"></div>
                   <div className="searchbar">
                  <SearchIcon/>
                  <input placeholder="Search for friend, post or pictures" className="searchInput"/>
                  </div>
        </div>

        <div className="center">
            <div>
                <div className="navbarIcons"></div> 
                <div className="navbarIconItem"></div> 
                <PersonIcon/>
                <span className="navbarIconBadge">1</span>
            </div>
            <div>
                <div className="navbarIcons"></div> 
                <div className="navbarIconItem"></div> 
                <ChatIcon/>
                <span className="navbarIconBadge">2</span>
            </div>
            <div>
                <div className="navbarIcons"></div> 
                <div className="navbarIconItem"></div> 
                <NotificationsIcon/>
                <span className="navbarIconBadge">1</span>
            </div>

                <img src="/assets/people/img/prep.jpg  " alt="" className="navbarImg"/>    
            </div>

        <div className="right">
             <div className="NavbarRight"></div>
                <div className="navbarLinks">
                    <button className="navbarLink">Homepage</button>
                    {/* {loggedIn ? 
                    <button className="navbarLink">Logout</button> :
                    <>
                    <button className="navbarLink">Login</button>
                    <button className="navbarLink">Signup</button> 
                    </>} */}
                 </div>
        </div>        
                
        </div>
    );
}