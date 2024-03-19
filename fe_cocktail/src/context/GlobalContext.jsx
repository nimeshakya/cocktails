import React, { useState, createContext, useContext } from 'react';

const GlobalContext = createContext();

// global state provider
const GlobalProvider = ({ children }) => {
    // state of user logged in or not
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    return (
        <GlobalContext.Provider value={{ userLoggedIn }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
export default GlobalProvider;
