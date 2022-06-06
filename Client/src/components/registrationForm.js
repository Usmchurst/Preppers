import React, { useState } from "react";
import "./style.css";
import background from "./public/corona.jpg";
const styles = {
  form:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  words: {
    textAlign: 'center',
    color: '#d7dbcc'
  }
}

export default function RegistrationForm() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');

  async function createUser(event) {
    event.preventDefault()

    if(password !== confirmPassword) {
      alert('Passwords must match')
    } else {

    const res = await fetch('http://localhost:3001/user/signup',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username, 
        email, 
        password
      })
    })
    const data = await res.json();


    if(data.status === 'ok') {
      localStorage.setItem('token', data.token)
      alert('User signed up successfully')
      window.location.assign('/')
    } else {
      alert('User not signed up successfully, please try again')
    }
  }
  };
   
  function LandingFrame() {
    const style = {

        "background-image": "url(" + background + ")" ,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }

    return (
    
    <div style={style}>
      
      <div style={styles.words}>
        <div style={{"font-size": "36px","color":"#def2a2",}} >
            Preppers    
        </div>
        <div style={{"font-size": "36px","color":"#def2a2",}}>
            Staying in touch with those who are prepared
            for society breaking down.
        </div>
      </div>
     <div >
     <div className="form" style={styles.form}>
      <form onSubmit={createUser} >
      <div className="form-body">
        <div className="username">
          
          <input
            className="form__input"
            type="text"
            id="userName"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder="username" 
          />
        </div>

        <div className="email" >
         
          <input
            type="email"
            id="email"
            className="form__input"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="email" 
          />
        </div>
        <div className="password">
         
          <input
            className="form__input"
            type="password"
            id="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="password" 
          />
        </div>
        <div className="confirm-password">
          
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e)=> setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      
      <div>
        <button type="submit" class="btn">
          Register
        </button>
      </div>
      </form> 
      </div>
    </div>
   


        
    </div>
    )

    
}


  return (
    <LandingFrame />
  );
}
