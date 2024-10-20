import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
                    <Link to="/team" className="text-gray-300 hover:text-white">Team</Link>
                    <Link to="/product" className="text-gray-300 hover:text-white">Product</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;