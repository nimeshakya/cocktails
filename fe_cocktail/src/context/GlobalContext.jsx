import React, { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';

// default axios variables like ensuring the csrftoken get sent with the request we make to django
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
});

const GlobalContext = createContext();

// global state provider
const GlobalProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    // toggle between login and registration forms
    const [registrationToggle, setRegistrationToggle] = useState(false);
    // state of user logged in or not

    useEffect(() => {
        client
            .get('/api/user')
            .then((res) => setCurrentUser(true))
            .catch((error) => {
                setCurrentUser(false);
            });
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                registrationToggle,
                setRegistrationToggle,
                client,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
export default GlobalProvider;
