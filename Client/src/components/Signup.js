import { useState } from 'react'


export default function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function createUser(event) {
    event.preventDefault()

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

    console.log(data)
  };

  return (
    <div>
      <h1>signup</h1>
      <form onSubmit={createUser}>
        <input 
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
          type="text"
          placeholder="username" 
        /> <br/>
       <input 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          type="email"
          placeholder="email" 
        /> <br/>
        <input 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        type="password"
        placeholder="password" 
      /> <br/>
      <input type='submit' value="submit"/>
      </form>
    </div>
  );
}

