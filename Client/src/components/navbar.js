import React from 'react';
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Link } from 'react-router-dom';
import auth from '../utils/auth'



export default function Navbar() {
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
            { auth.loggedIn() ? (
                <>
                <div>
                    <Link to="/profile"><PersonIcon/></Link>
                </div>
                <div>
                    <ChatIcon/>
                </div>
                <div>
                    <Link to="/newpost"><AddAPhotoIcon /></Link>
                </div>
                </>
                ) : <></>
            }
      
            </div>

        <div className="right">
             <div className="NavbarRight"></div>
                <div className="navbarLinks">
                <Link to="/"><button className="navbarLink">Homepage</button></Link>
                    { auth.loggedIn() ? (
                    <button onClick={auth.logout} className="navbarLink">Logout</button> 
                    ) : (
                    <>
                    <Link to="/login"><button className="navbarLink" >Login</button></Link>
                    <Link to="/signup"><button className="navbarLink">Signup</button></Link>
                    </>
                    )}
                 </div>
        </div>        
                
        </div>
    );
}