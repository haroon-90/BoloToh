import React from 'react'

const footer = () => {
    return (
        <footer className="w-full border-t border-gray-800/80 bg-[#0B0F17] text-gray-400 text-sm mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <img
                        src={`${import.meta.env.BASE_URL}BoloToh_icon_logo.svg`}
                        alt="BoloToh Icon"
                        className="h-7 w-auto object-contain"
                    />
                    <div className="text-gray-400 text-xs sm:text-sm font-medium">
                        &copy; 2025 | Tech Dastak | All rights reserved
                    </div>
                </div>
                <ul className="flex items-center gap-6 text-xs sm:text-sm font-medium">
                    <li>
                        <a href="#" className="hover:text-blue-400 transition-colors">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-400 transition-colors">
                            Terms of Service
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default footer
