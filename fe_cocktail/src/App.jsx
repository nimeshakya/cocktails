import React from 'react';

import { useGlobalContext } from './context/GlobalContext';
import LoginRegister from './pages/LoginRegister';

const App = () => {
    const { userLoggedIn } = useGlobalContext();
    return <LoginRegister />;
};

export default App;
