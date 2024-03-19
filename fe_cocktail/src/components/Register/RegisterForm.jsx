import React, { useState } from 'react';

import { useGlobalContext } from '../../context/GlobalContext';

const RegisterForm = () => {
    const {
        setCurrentUser,
        registrationToggle,
        setRegistrationToggle,
        client,
    } = useGlobalContext();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = (e) => {
        e.preventDefault();
        client
            .post('/api/register', { email, username, password })
            .then((res) => {
                client.post('/api/login', { email, password });
            })
            .then((res) => {
                setCurrentUser(true);
            });
    };

    return (
        <form className='registration-form' onSubmit={handleRegistration}>
            <div className='username-input'>
                <label htmlFor='username'>Username:</label>
                <input
                    type='username'
                    name='username'
                    id='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className='email-input'>
                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className='password-input'>
                <label htmlFor='password'>Password:</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button className='form-submit-btn'>Register</button>
            <button
                type='button'
                onClick={() => setRegistrationToggle(!registrationToggle)}
            >
                Already have an account? Log In!
            </button>
        </form>
    );
};

export default RegisterForm;
