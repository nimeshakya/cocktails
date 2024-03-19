import React from 'react';

const LoginForm = () => {
    return (
        <form className='login-form'>
            <div className='email-input'>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' id='email' />
            </div>
            <div className='password-input'>
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' id='password' />
            </div>
            <button className='form-submit-btn'>Log In</button>
        </form>
    );
};

export default LoginForm;
