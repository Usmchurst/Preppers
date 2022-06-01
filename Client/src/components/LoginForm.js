import {useState} from 'react';

import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap';


export default function Login() {
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit (event) {
        event.preventDefault();
    }

    return (
        <div className='Login'>
            <Form onSubmit={handleSubmit}>
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