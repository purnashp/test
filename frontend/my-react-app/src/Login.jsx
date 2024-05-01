import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handlelogin = async e => {
        e.preventDefault();

        axios.post('http://localhost:3000/auth/adminlogin', values)
        .then(result => {
            if(result.data.loginStatus) {
                localStorage.setItem("valid", true)
                navigate('/dashboard')
            } else {
                setError(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
    

    return (
        <form onSubmit={handlelogin}>
            <input type="username" placeholder="Email" name="username" value={formData.username} onChange={onChange} required />
            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={onChange} required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
