import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
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
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                        <Sparkles className="w-3 h-3 text-blue-600" />
                        AI Studio
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex lg:items-center lg:gap-8">
                    <ul className="flex items-center gap-6 text-sm font-medium text-slate-600">
                        <li>
                            <a href="#" className="hover:text-blue-600 transition-colors py-1">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-600 transition-colors py-1">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-600 transition-colors py-1">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-600 transition-colors py-1">
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
                        className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
                    <a
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    >
                        Contact
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
