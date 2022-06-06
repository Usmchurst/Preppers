import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/LoginForm";
import RegistrationForm from "./components/registrationForm";
import Home from './pages/home'
import Profile from './pages/profile'
import AddPost from './pages/addPost'
import Textarea from "./components/Textarea";
// import io from "socket.io-client";
// const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<RegistrationForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newpost" element={<AddPost />} />
          <Route path="/Chat" element={<Textarea />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
