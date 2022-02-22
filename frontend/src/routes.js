import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewClient from './pages/NewClient';

export default function MainRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Logon />} /> 
            <Route path="/register" element={<Register />} /> 
            <Route path="/profile" element={<Profile />} /> 
            <Route path="/newclient" element={<NewClient />} />
        </Routes>         
        </BrowserRouter>
    );
}
