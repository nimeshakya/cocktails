import React, { useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';

import LoginForm from '../components/Login/LoginForm';
import RegisterForm from '../components/Register/RegisterForm';

const LoginRegister = () => {
    const { registrationToggle } = useGlobalContext();

    /* Input Variables */
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login-form-container'>
            {registrationToggle ? <RegisterForm /> : <LoginForm />}
        </div>
    );
};

export default LoginRegister;
