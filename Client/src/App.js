import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/LoginForm'; 
import RegistrationForm from "./components/registrationForm";
import Homepage from './pages/home'
import Profile from './pages/profile'
import AddPost from './pages/addPost'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Homepage />}  />
          <Route path="/login"  element={<Login />}  />
          <Route path="/signup" element={<RegistrationForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newpost" element={<AddPost />} />
        </Routes> 
      </BrowserRouter>
    </div>
    
  );
}

export default App;