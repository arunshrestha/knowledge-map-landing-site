import React from 'react';
import brandeis_logo_seal_white_digital from '../assets/brandeis_logo_seal_white_digital.png';
import ssd_lab_logo from '../assets/ssd-lab-logo.png';

const Header = () => {
    return (
        <header className="relative bg-[#003478] text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo on the left */}
                <div className="flex items-center space-x-3">
                    <img src={brandeis_logo_seal_white_digital} alt="Brandeis Logo" className="h-12 w-36 object-contain" />
                    <span className="text-xl font-semibold"></span>
                </div>

                {/* Title in the center */}
                <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold">
                    KnowledgeMap
                </h1>

                {/* Logo on the right */}
                <div className="flex items-center space-x-3 ml-auto">
                    <img src={ssd_lab_logo} alt="SSD Lab Logo" className="h-12 w-36 object-contain" />
                </div>
            </div>
        </header>
    );
};

export default Header;