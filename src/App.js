import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CocktailDetailsPage from './pages/CocktailDetailsPage';
import AppNavbar from './components/Navbar';

const App = () => (
    <Router>
        <AppNavbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cocktail/:id" element={<CocktailDetailsPage />} />
        </Routes>
    </Router>
);

export default App;
