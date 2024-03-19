import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';

import LoginForm from '../components/Login/LoginForm';
import RegisterForm from '../components/Register/RegisterForm';

const LoginRegister = () => {
    const { userLoggedIn } = useGlobalContext();
    return (
        <div className='login-form-container'>
            {userLoggedIn ? <LoginForm /> : <RegisterForm />}
        </div>
    );
};

export default LoginRegister;
