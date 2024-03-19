import React from 'react';

import { useGlobalContext } from './context/GlobalContext';
import LoginRegister from './pages/LoginRegister';

const App = () => {
    const { currentUser, setCurrentUser, client } = useGlobalContext();

    const handleLogout = (e) => {
        e.preventDefault();
        client
            .post('/api/logout', { withCredentials: true })
            .then((res) => setCurrentUser(false));
    };

    if (currentUser) {
        return (
            <div>
                <h1>You Are Logged In!</h1>
                <form className='log-out-form' onSubmit={handleLogout}>
                    <button type='submit'>Log Out</button>
                </form>
            </div>
        );
    }
    return <LoginRegister />;
};

export default App;
