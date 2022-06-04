import {useState} from 'react';

import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';


export default function Login() {
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");

    async function loginUser(event) {
        event.preventDefault()

        const res = await fetch('http://localhost:3001/user/login',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            email, 
            password
          })
        })
    
        const data = await res.json();
        
        if(data.user){
            localStorage.setItem('token', data.token)
            alert('login successful')
            window.location.assign('/home')
        } else {
            alert('please check username and password')
        }
      };

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    return (
        <div className='Login'>
            <h1>Login</h1>
            <Form onSubmit={loginUser}>
                <Form.Group size='lg' controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size='lg' controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block='true' size='lg' type='submit' disabled={!validateForm()}>
                    Login
                </Button>
            </Form>

        </div>
    );
}