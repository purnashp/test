import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
    const [admin, SetAdmin] = useState({
        username: '',
        password: ''
    });

    const onChange = e => SetAdmin({ ...admin, [e.target.name]: e.target.value });

    const handlkregister= async e => {
        e.preventDefault();
        axios.post('http://localhost:3000/auth/adminlogin', values)
        .then(result => {
           console.log(result);
        })
        .catch(err => console.log(err))
    }
    

    return (
        <form onSubmit={handlkregister}>
            <input type="text" placeholder="Name" name="name" value={admin.name} onChange={onChange} required />
            <input type="email" placeholder="Email" name="email" value={admin.email} onChange={onChange} required />
            <input type="password" placeholder="Password" name="password" value={admin.password} onChange={onChange} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default Registration;
