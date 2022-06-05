import React, { useState } from "react";
import "./style.css";
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
      window.location.assign('/home')
    } else {
      alert('User not signed up successfully, please try again')
    }
  }
  };

  return (
    <div className="form">
      <form onSubmit={createUser} >
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="userName">
            User Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="userName"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder="username" 
          />
        </div>

        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
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
          <label className="form__label" for="password">
            Password{" "}
          </label>
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
          <label className="form__label" for="confirmPassword">
            Confirm Password{" "}
          </label>
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
      <div class="footer">
        <button type="submit" class="btn">
          Register
        </button>
      </div>
      </form>
    </div>
  );
}
