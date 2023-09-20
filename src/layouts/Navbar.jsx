import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../helpers/Auth_guard';


export const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="bg-indigo-900 text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Company Name on the Left with Blue Background */}
                <div className="text-white text-2xl font-bold bg-blue-700 px-2 py-1 rounded mb-2 md:mb-0">
                    <Link to="/">Plateforme de collecte</Link>
                </div>

                {/* Navigation Links on the Right */}
                <ul className="flex space-x-4">

                    {isAuthenticated() ? (
                        <>
                            <li>
                                <Link
                                    to="/dashboard"
                                    className={`${location.pathname === '/dashboard' ? 'text-yellow-500 hover:text-gray-300' : 'text-white hover:text-gray-300'
                                        }`}
                                >
                                    Tableau de bord
                                </Link>
                            </li>
                        </>)
                        : (
                            <>
                                <li>
                                    <Link
                                        to="/login"
                                        className={`${location.pathname === '/login' ? 'text-yellow-500 hover:text-gray-300' : 'text-white hover:text-gray-300'
                                            }`}
                                    >
                                        Se connecter
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/register"
                                        className={`${location.pathname === '/register' ? 'text-yellow-500 hover:text-gray-300' : 'text-white hover:text-gray-300'
                                            }`}
                                    >
                                        S'inscrire
                                    </Link>
                                </li>

                            </>)}






                </ul>
            </div>
        </nav>
    );
};
