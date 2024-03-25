import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { useGlobalContext } from './context/GlobalContext';
import LoginRegister from './pages/LoginRegister';

import NavBar from './components/NavBar/NavBar';
import AllCocktails from './components/AllCocktails/AllCocktails';
import MyCocktails from './components/MyCocktails/MyCocktails';

const App = () => {
    const { currentUser, setCurrentUser, client } = useGlobalContext();

    const handleLogout = (e) => {
        e.preventDefault();
        client
            .post('/api/logout', { withCredentials: true })
            .then((res) => setCurrentUser(false));
    };

    return (
        <div className='bg-coolars-color-7 min-h-screen'>
            <NavBar />
            <Routes>
                <Route path='/' element={<AllCocktails />} />
                <Route path='/mydrinks' element={<MyCocktails />} />
            </Routes>
        </div>
    );
};

export default App;
