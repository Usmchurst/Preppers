import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
export default function Navbar() {
    return (
        <div className="NavbarContainer">
             <div className="navbarLeft"></div>
                 <span className="logo">Preppers</span>
             <div className="navbarCenter"></div>
                   <div className="searchbar">
                  <SearchIcon/>
                  <input placeholder="Search for friend, post or pictures" className="searchInput"/>
                  </div>
             <div className="NavbarRight"></div>
                 < div className="navbarLinks"></div>
                 <span className="navbarLink">Homepage</span>
                 <span className="navbarLink">Timeline</span>

               <div className="navbarIcons"></div> 
                <div className="navbarIconItem"></div> 
                <PersonIcon/>
                <span className="navbarIconBadge">1</span>

                {/* <div className="navbarIcons"></div>  */}
                <div className="navbarIconItem"></div> 
                <ChatIcon/>
                <span className="navbarIconBadge">2</span>

                {/* <div className="navbarIcons"></div>  */}
                <div className="navbarIconItem"></div> 
                <NotificationsIcon/>
                <span className="navbarIconBadge">1</span>

            <img src="/assets/people/img/prep.jpg  " alt="" className="navbarImg"/>    

                
                
        </div>
    );
}