import React, { useState } from 'react';

import { useGlobalContext } from '../../context/GlobalContext';

const LoginForm = () => {
    const {
        setCurrentUser,
        registrationToggle,
        setRegistrationToggle,
        client,
    } = useGlobalContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        client
            .post('/api/login', { email, password })
            .then((res) => setCurrentUser(true));
    };

    return (
        <form className='login-form' onSubmit={handleLogin}>
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
            <button className='form-submit-btn'>Log In</button>
            <button
                type='button'
                onClick={() => setRegistrationToggle(!registrationToggle)}
            >
                Don't have an account? Register Now!
            </button>
        </form>
    );
};

export default LoginForm;
