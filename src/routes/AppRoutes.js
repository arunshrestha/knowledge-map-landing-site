import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import NotFound from '../views/NotFound';
import Home from "../views/Home";
import About from "../views/About";
import Team from "../views/Team";
import Product from "../views/Product";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Routes with MainLayout */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/product" element={<Product />} />
            </Route>

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;

