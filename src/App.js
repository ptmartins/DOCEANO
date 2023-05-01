import React from 'react';
import './app.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, Cetaceans, Pinipedes } from './pages';

const App = () => {

    const location = useLocation();

    if (location.pathname === '/') {
        if (!document.body.classList.contains('is-home')) {
            document.body.classList.add('is-home');
        }
    }
    else {
        if (document.body.classList.contains('is-home')) {
            document.body.classList.remove('is-home');
        }
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cetaceans" element={<Cetaceans />} />
            <Route path="/pinipedes" element={<Pinipedes />} />
        </Routes>
    )
}

export default App; 