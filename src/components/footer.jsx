import React from 'react'

const footer = () => {

    return (
        <footer className="w-full">
            <div className="footer flex flex-col md:flex-row items-center justify-between p-4 px-6 md:px-10 w-full text-blue-200 bg-[#0044ff]">
                <div className="logo flex md:flex-row items-center gap-3 mb-4">
                    <img src={`${import.meta.env.BASE_URL}BoloToh_icon_logo.svg`} alt="BoloToh Logo" className="h-8" />
                    <div className="text-center mt-1 text-white">
                        &copy; 2025 | Tech Dastak | All rights reserved
                    </div>
                </div>
                <ul className="flex md:flex-row gap-4 space-x-0 md:space-x-6 space-y-2 md:space-y-0">
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default footer
