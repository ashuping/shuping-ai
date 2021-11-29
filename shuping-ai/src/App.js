import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header.js';
import MainView from './views/MainView/MainView.js';
import AboutMeView from './views/AboutMeView/AboutMeView.js';
import AcksView from './views/AcksView/AcksView.js';

function App() {
    const [menu_open, set_menu_open] = useState(false);

    return (
        <div className="top-level">
            <BrowserRouter >
                <Header menu_open={menu_open} set_menu_open={set_menu_open} />
                <Routes>
                    <Route exact path="/" element={<MainView />} />
                    <Route exact path="/acknowledgements" element={<AcksView />} />
                    <Route exact path="/about" element={<AboutMeView />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
