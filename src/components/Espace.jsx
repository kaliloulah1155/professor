import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { Contenu } from './coordonnees/Contenu';

export const Espace = () => {
    // State to track the active content
    const [activeContent, setActiveContent] = useState('dashboard'); // Default to 'dashboard'
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to handle content change
    const changeContent = (content) => {
        setActiveContent(content);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                closeSidebar();
            } else {
                setIsSidebarOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col md:flex-row">
            {/* Left Sidebar */}
            <div className="md:hidden">
                <button
                    onClick={toggleSidebar}
                    className="px-2 py-1 text-gray-500 hover:text-gray-800"
                >
                    {isSidebarOpen ? 'Fermer' : 'Ouvrir'} le menu
                </button>
            </div>

            <div
                className={`md:w-1/4 bg-gray-200 p-4 md:h-screen transition-all ${isSidebarOpen ? 'block' : 'hidden'
                    }`}
            >
                <h2 className="text-lg font-semibold mb-4">MON ESPACE</h2>
                <ul className="space-y-2">
                    <li
                        className={`cursor-pointer flex items-center ${activeContent === 'dashboard' ? 'text-blue-500' : 'text-gray-700'
                            }`}
                        onClick={() => changeContent('dashboard')}
                    >
                        {/* SVG icon */}
                        <FontAwesomeIcon icon={faBook} className="w-4 h-4 mr-2" />
                        Dashboard
                    </li>
                    <li
                        className={`cursor-pointer flex items-center ${activeContent === 'profile' ? 'text-blue-500' : 'text-gray-700'
                            }`}
                        onClick={() => changeContent('profile')}
                    >
                        {/* SVG icon */}
                        <FontAwesomeIcon icon={faUser} className="w-4 h-4 mr-2" />
                        Profile
                    </li>
                    <li
                        className={`cursor-pointer flex items-center ${activeContent === 'settings' ? 'text-blue-500' : 'text-gray-700'
                            }`}
                        onClick={() => changeContent('settings')}
                    >
                        {/* SVG icon */}
                        <FontAwesomeIcon icon={faKey} className="w-4 h-4 mr-2" />
                        Settings
                    </li>
                </ul>
            </div>

            {/* Content Area */}
            <div className="md:w-3/4 p-4">
                <Contenu activeContent={activeContent} />
            </div>
        </div>
    );
};
