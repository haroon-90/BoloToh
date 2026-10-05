import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-800/80 bg-[#0B0F17]/90 backdrop-blur-md">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo & Badge */}
                <div className="flex items-center gap-3">
                    <a href="#" className="flex items-center gap-2 group">
                        <img
                            src={`${import.meta.env.BASE_URL}BoloToh.svg`}
                            alt="BoloToh Logo"
                            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                        />
                    </a>
                    <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        AI Studio
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex lg:items-center lg:gap-8">
                    <ul className="flex items-center gap-6 text-sm font-medium text-gray-300">
                        <li>
                            <a href="#" className="hover:text-blue-400 transition-colors py-1">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400 transition-colors py-1">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400 transition-colors py-1">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400 transition-colors py-1">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/80 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                        aria-label="Toggle Menu"
                    >
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMobileMenuOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                            ) : (
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="lg:hidden border-b border-gray-800 bg-[#0F172A] px-4 pt-2 pb-4 space-y-1 shadow-xl">
                    <a
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-gray-800"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-gray-800"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-gray-800"
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-gray-800"
                    >
                        Contact
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
