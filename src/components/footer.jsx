import React from 'react'

const footer = () => {

    return (
        <footer>
            <div className=" footer flex flex-row items-center justify-between p-4 px-10 w-full text-blue-200 bg-[#0044ff]">
                <div className="logo flex gap-3 ">
                    <img src="/src/assets/BoloToh_icon_logo.svg" alt="BoloToh Logo" className="h-8" />
                    <div className="text-center mt-1 text-white">
                        &copy; 2025 | Tech Dastak | All rights reserved
                    </div>
                </div>
                <ul className="flex space-x-6">
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default footer
