import React from 'react';
import { useState } from 'react';
import axios, {AUTH_TOKEN} from 'axios';

const registerBox = {
    margin: 'auto',
    textAlign: 'center',
    width: '25%',
    height:150,
    display: 'inline-block',
    backgroundColor: 'white',
    padding: 20,
    marginTop: 70,
    marginLeft: 10,
    border: '1px #085893 solid',
    borderRadius: 25
};

const RegisterConmponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

    const handleRegister = () => {
        if (username !== '' && password !== '' && email !== '') {
            const params = { username, password, email };
            axios.post('http://localhost:8080/users', params)
                .then(response => { 
                    if(response.status === 200) {
                        alert('Registration successful!')
                    }
                });
        }
    };

    return(
        <div style={ registerBox }>
            <h3>
                Register
            </h3>
            <input type='text' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)}></input>
            <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}></input>
            <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}></input>
            <br></br>
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default RegisterConmponent;