import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import GlobalProvider from './context/GlobalContext';
import App from './App';
import './style.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = extendTheme({
    fonts: {
        heading: `"Montserrat", sans-serif`,
        body: `"Montserrat", sans-serif`,
    },
});

root.render(
    <BrowserRouter>
        <ChakraProvider theme={theme}>
            <GlobalProvider>
                <App />
            </GlobalProvider>
        </ChakraProvider>
    </BrowserRouter>
);
