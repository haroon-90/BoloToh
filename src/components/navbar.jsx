import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between p-4 px-10 w-full bg-[#0044ff] relative">
            <div className="logo">
                <img src={`${import.meta.env.BASE_URL}BoloToh.svg`} alt="BoloToh Logo" className="h-8" />
            </div>

            {/* Mobile menu button (shows only on small screens) */}
            <div className="block lg:hidden">
                <button
                    onClick={toggleMobileMenu}
                    className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white"
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu (Separate Box - shows only when isMobileMenuOpen is true) */}
            {isMobileMenuOpen && (
                <div className="fixed top-16 left-0 w-full bg-white shadow-md rounded-md z-20 lg:hidden">
                    <ul className="list flex flex-col text-black p-4">
                        <li>
                            <a href="#" className="block py-2 hover:text-blue-500">
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 hover:text-blue-500"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 hover:text-blue-500"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 hover:text-blue-500"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}

            {/* Desktop Menu (hidden on small screens) */}
            <div className="hidden lg:flex lg:items-center lg:w-auto">
                <ul className="list lg:flex flex-col lg:flex-row space-x-0 lg:space-x-6 text-blue-200">
                    <li>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
                        // Removed tooltip on mobile view
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
                        // Removed tooltip on mobile view
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white"
                        // Removed tooltip on mobile view
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;