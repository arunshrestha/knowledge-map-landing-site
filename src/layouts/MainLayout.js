import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const MainLayout = () => {
    return (
        <>
            <Header />
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
