import React, { useEffect, useState } from 'react';
import { Link, redirect, useLocation } from 'react-router-dom';
import { Logo } from '../layouts/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import {  loginUser } from "../features/auth/authSlice";


 // Import the downloaded image

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const[showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    
      
    let location = useLocation();
   
   
    const { isLoading, isError,token } = useSelector((state) => {
        return state.auth
    })
    const dispatch = useDispatch()

    
    
    const handleLogin = async (e) => {
        e.preventDefault();
        // Logique de validation des champs ici
        // Par exemple, vérifiez si l'e-mail et le mot de passe sont valides
        // Exemple de validation basique (vous devez implémenter votre propre logique de validation)
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!email) {
            setEmailError('Veuillez entrer votre adresse e-mail.');
        } else if (!emailRegex.test(email)) {
            setEmailError("L'adresse e-mail n'est pas valide.");
        } else {
            setEmailError(''); // Réinitialisez le message d'erreur
        }


        if (!password) {
            setPasswordError('Veuillez entrer votre mot de passe.');
        } else if (password.length < 3) {
            setPasswordError('Le mot de passe doit avoir au moins 3 caractères.');
        } else {
            setPasswordError(''); // Réinitialisez le message d'erreur
        }


        // Si les champs sont valides, vous pouvez effectuer une action de connexion
        if (email && password) {
            // Effectuez l'action de connexion ici
             dispatch(loginUser({
                email,
                password
            }));
           
             if (token !== null) {
                // Use navigate to go to the dashboard page
                 return <Navigate to="/dashboard" state={{ from: location }} replace />;
            } 
         

        }
    };

    
    
 
       
   
    return (
        <form onSubmit={e => { e.preventDefault(); }} className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto my-10 p-4 border rounded-lg border-gray-300 bg-white">
             <Logo />
            <h1 className="text-2xl font-bold mb-4 text-center">Je me connecte</h1>
            <div className="mb-4">
                <label htmlFor="email" className="block font-medium">E-mail</label>
                <input
                    type="email"
                    className={`w-full border ${emailError ? 'border-red-500' : 'border-gray-300'
                        } rounded px-3 py-2 outline-none focus:border-blue-500`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='E-mail'
                />
                {emailError && <p className="text-red-500 mt-1">{emailError}</p>}
            </div>
            <div className="mb-4 relative">
                <label htmlFor="password" className="block font-medium">
                    Mot de passe
                </label>
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className={`w-full border ${passwordError ? 'border-red-500' : 'border-gray-300'
                            } rounded px-3 py-2 outline-none focus:border-blue-500 pr-10`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="on"
                        placeholder='Mot de passe'
                       
                    />
                    <button
                        type="button"
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? (
                            <FontAwesomeIcon icon={faEyeSlash} size="lg" />
                        ) : (
                            <FontAwesomeIcon icon={faEye} size="lg" />
                        )}
                    </button>
                </div>
                {passwordError && (
                    <p className="text-red-500 mt-1">{passwordError}</p>
                )}
            </div>
            {isLoading ? (
                <div className="mb-4 text-center">
                    <p className="text-blue-500">Chargement en cours...</p>
                </div>
            ) : (
                <>
                    {isError && (
                        <p className="text-red-500 mt-1 mb-1 text-center">
                            Impossible de se connecter
                        </p>
                    )}
                    <div className="mb-4 text-center">
                        <button
                            className="bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-600"
                            onClick={handleLogin}
                        >
                            Se connecter
                        </button>
                    </div>
                    <div className="text-center">
                        <Link to="/" className="text-blue-500 hover:underline">
                            Mot de passe oublié
                        </Link>
                        <span className="mx-2 text-gray-500">|</span>
                        <Link to="/register" className="text-blue-500 hover:underline">
                            S'inscrire
                        </Link>
                    </div>
                </>
            )}
        </form>
    );

    
}
