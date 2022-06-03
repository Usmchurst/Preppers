import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/LoginForm'; 
import RegistrationForm from "./components/registrationForm";
import Navbar from './components/navbar'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/home"  element={<Navbar />}  />
          <Route path="/login"  element={<Login />}  />
          <Route path="/signup" element={<RegistrationForm />} />
        </Routes> 
      </BrowserRouter>
    </div>
    
  );
}

export default App;