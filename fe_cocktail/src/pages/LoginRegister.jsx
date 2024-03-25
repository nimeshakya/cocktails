import React, { useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';

import LoginForm from '../components/Login/LoginForm';
import RegisterForm from '../components/Register/RegisterForm';

const LoginRegister = () => {
    const { registrationToggle } = useGlobalContext();

    return (
        <div className='login-form-container'>
            {registrationToggle ? <RegisterForm /> : <LoginForm />}
        </div>
    );
};

export default LoginRegister;
