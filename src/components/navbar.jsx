import React, { useState } from 'react';

const Navbar = () => {
    const [tooltip, setTooltip] = useState({ visible: false, text: '', position: { top: 0, left: 0 } });
    const handleMouseOver = (event, text) => {
        const rect = event.target.getBoundingClientRect();
        setTooltip({
            visible: true,
            text,
            position: {
                top: rect.top + window.scrollY + 30,
                left: rect.left + window.scrollX - 200, // Adjusted to show to the left of the cursor
            },
        });
    };

    const handleMouseOut = () => {
        setTooltip({ visible: false, text: '', position: { top: 0, left: 0 } });
    };

    return (
        <nav className="flex flex-row items-center justify-between p-4 px-10 w-full bg-[#0044ff]">
            <div className="logo">
                <img src={`${import.meta.env.BASE_URL}BoloToh.svg`} alt="BoloToh Logo" className="h-8" />
            </div>
            <ul className="list flex space-x-6 text-blue-200">
                <li>
                    <a
                        href="#"
                        className="hover:text-white home"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="hover:text-white about"
                        onMouseOver={(e) => handleMouseOver(e, 'BoloToh is a fun AI-powered app that turns your personal input into creative poems, roasts, and stories — in your chosen language and mood.')}
                        onMouseOut={handleMouseOut}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="hover:text-white services"
                        onMouseOver={(e) => handleMouseOver(e, '✍️ Personalized Poem Generator\n 😂 Funny Roasts Creator\n 📖 Short Story Maker\n 🌐 Multi-language & Mood Based Content')}
                        onMouseOut={handleMouseOut}
                    >
                        Services
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="hover:text-white contact"
                        onMouseOver={(e) => handleMouseOver(e, 'Email: techdastak2@gmail.com\n Phone: +92-300-9530640\n Address: Kotla Arab Ali khan, Punjab, Pakistan')}
                        onMouseOut={handleMouseOut}
                    >
                        Contact
                    </a>
                </li>
            </ul>
            {
                tooltip.visible && (
                    <div
                        style={{
                            position: 'absolute',
                            top: tooltip.position.top,
                            left: tooltip.position.left,
                            zIndex: 1000,
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '5px',
                            border: '1px solid black',
                            borderRadius: '5px',
                        }}
                    >
                        {tooltip.text}
                    </div>
                )
            }
        </nav>
    );
};

export default Navbar;
