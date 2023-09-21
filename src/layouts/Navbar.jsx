import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../helpers/Auth_guard';
import { useDispatch,useSelector } from 'react-redux';
 import { logoutUser } from '../features/auth/authSlice';



export const Navbar = () => {
    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [fullname, setFullNames]=useState("")
    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const dropdownRef = useRef(null);
    const dispatch = useDispatch()
    const nagivate=useNavigate()

    const handleLogout = () => {
        // Dispatch the logout action
        dispatch(logoutUser());
        setIsDropdownOpen(false)
        // Redirect to the login page
        nagivate('/login');
    };

    const { user } = useSelector((state) => {
        return state.auth
    })

    useEffect(() => {
        // Utilisez la méthode map pour concaténer les noms complets et stockez-les dans l'état "fullNames"
        const names = user.map((us) => `${us.name} ${us.lastname}`);
        setFullNames(names);
       
    }, [user]);
    

    return (
        <nav className="bg-indigo-900 text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Company Name on the Left with Blue Background */}
                <div className="text-white text-2xl font-bold bg-blue-700 px-2 py-1 rounded mb-2 md:mb-0">
                    <Link to="/">MABS</Link>
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
                            <li>
                                <button
                                    onClick={handleDropdownToggle}
                                    onMouseEnter={()=>setIsDropdownOpen(true)}
                                    
                                    className={`${isDropdownOpen
                                        ? ' hover:text-gray-300 text-gray'
                                        : 'text-white hover:text-gray-300  text-gray'
                                        }`}
                                >
                                    Mon Espace
                                </button>
                                {isDropdownOpen && (
                                    <ul
                                        ref={dropdownRef}
                                        onMouseLeave={() => setIsDropdownOpen(false)}
                                        className="absolute top-10 right-0 mt-8 mx-2 bg-white text-black rounded-lg shadow-lg py-2"
                                    >
                                        {/* Add the user's photo and name here */}
                                        <li className="px-4 py-2">
                                            <div className="flex flex-col items-center">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                                    alt="Photo de l'utilisateur"
                                                    className="w-16 h-16 rounded-full mb-2"
                                                />
                                                <span className="text-sm">{fullname}</span>
                                            </div>
                                        </li>
                                        <li className="px-4 py-2 text-center">
                                            <span className="text-sm">Administrateur</span>
                                        </li>
                                        <li className="px-4 py-2 text-center text-dark hover:bg-blue-400">
                                            <Link
                                                to="/espace"
                                                className={`${location.pathname === '/espace' ? 'text-yellow-500 hover:text-gray-300' : 'text-white hover:text-gray-300'
                                                    }`}
                                            >
                                                <span className={`text-sm ${location.pathname === '/espace' ? 'text-yellow-500' : 'text-black'}`}>Mes coordonnées</span>
                                            </Link>
                                        </li>
                                      
                                        <li className="px-4 py-2  text-center hover:bg-blue-400">
                                            <Link to="/logout" onClick={handleLogout}>
                                                Déconnexion
                                            </Link>
                                        </li>
                                    </ul>

                                )}
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
