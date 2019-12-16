import React from 'react';
import { useState } from 'react';
import axios, {AUTH_TOKEN} from 'axios';

const loginBox = {
    margin: 'auto',
    textAlign: 'center',
    width: '25%',
    height: 150,
    backgroundColor: 'white',
    display: 'inline-block',
    padding: 20,
    marginTop: 50,
    marginRight: 10,
    border: '1px #085893 solid',
    borderRadius: 25
};


const LoginConmponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    const handleLogin = () => {
        if (username !== '' && password !== '') {
            axios.get(`http://localhost:8080/users/${username}`)
                .then(response => {
                    if(response.status === 200){
                        alert('Login successful!');
                    }
                });
        }
    };

    return(
        <div style={ loginBox }>
            <h3>
                Login
            </h3>
            <input type='text' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)}></input>
            <br></br>
            <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}></input>
            <br></br>
            <button onClick={ handleLogin }>Login</button>
        </div>
    );
};

export default LoginConmponent;