import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/LoginForm';
import Signup from './components/Signup'


function App() {
  return (
    <div>
      <div>
      <Login />
      </div>
      <div>
      <Signup />
      </div>
    </div>
    
  );
}

export default App;
