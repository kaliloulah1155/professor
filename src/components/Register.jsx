import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../layouts/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export const Register = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');

  const [passwordConfirmationError, setPasswordConfirmationError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConf, setShowPasswordConf] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowPasswordConf = () => {
    setShowPasswordConf(!showPasswordConf);
  };

  const handleRegister = () => {
    // Logique de validation des champs ici
    // Par exemple, vérifiez si l'e-mail et le mot de passe sont valides
    if (!name) {
      setNameError('Veuillez entrer votre nom.');
    } else {
      setNameError('');
    }

    if (!lastname) {
      setLastnameError('Veuillez entrer votre prénom.');
    } else {
      setLastnameError('');
    }

    // Exemple de validation basique (vous devez implémenter votre propre logique de validation)
    if (!email) {
      setEmailError('Veuillez entrer votre adresse e-mail.');
    } else {
      setEmailError(''); // Réinitialisez le message d'erreur
    }

    if (!password) {
      setPasswordError('Veuillez entrer votre mot de passe.');
    } else {
      setPasswordError('');
    }

    if (password !== passwordConfirmation) {
      setPasswordConfirmationError('Les mots de passe ne correspondent pas.');
    } else {
      setPasswordConfirmationError('');
    }

    // If all fields are valid, you can perform the registration action
    if (name && email && password && password === passwordConfirmation) {
      // Perform the registration action here
    }
  };
  return (
    <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto my-10 p-4 border rounded-lg border-gray-300 bg-white">
    
           <Logo />

      <h1 className="text-2xl font-bold mb-4 text-center">S'inscrire</h1>
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium">Nom</label>
        <input
          type="text"
          
          className={`w-full border ${nameError ? 'border-red-500' : 'border-gray-300'
            } rounded px-3 py-2 outline-none focus:border-blue-500`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom"
        />
        {nameError && <p className="text-red-500 mt-1">{nameError}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="lastname" className="block font-medium">Prénoms</label>
        <input
          type="text"
          className={`w-full border ${lastnameError ? 'border-red-500' : 'border-gray-300'
            } rounded px-3 py-2 outline-none focus:border-blue-500`}
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          placeholder="Prénoms"
        />
        {lastnameError && <p className="text-red-500 mt-1">{lastnameError}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium">E-mail</label>
        <input
          type="email"
          id="email"
          className={`w-full border ${emailError ? 'border-red-500' : 'border-gray-300'
            } rounded px-3 py-2 outline-none focus:border-blue-500`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        {emailError && <p className="text-red-500 mt-1">{emailError}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block font-medium">Mot de passe</label>
        <div className="relative">
        <input
            type={showPassword ? 'text' : 'password'}
          id="password"
          className={`w-full border ${passwordError ? 'border-red-500' : 'border-gray-300'
            } rounded px-3 py-2 outline-none focus:border-blue-500`}
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
        {passwordError && <p className="text-red-500 mt-1">{passwordError}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="passwordConfirmation" className="block font-medium">Confirmation de  mot passe</label>
        <div className="relative">
        <input
            type={showPasswordConf ? 'text' : 'password'}
          id="passwordConfirmation"
          className={`w-full border ${passwordConfirmationError ? 'border-red-500' : 'border-gray-300'
            } rounded px-3 py-2 outline-none focus:border-blue-500`}
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="Confirmation de  mot passe"
        />
          <button
            type="button"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
            onClick={toggleShowPasswordConf}
          >
            {showPasswordConf ? (
              <FontAwesomeIcon icon={faEyeSlash} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faEye} size="lg" />
            )}
          </button>
        </div>
        {passwordConfirmationError && <p className="text-red-500 mt-1">{passwordConfirmationError}</p>}
      </div>
      <div className="mb-4 text-center">
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-600"
          onClick={handleRegister}
        >
          Valider
        </button>
      </div>
      <div className="text-center">
        <Link to="/" className="text-blue-500 hover:underline">Mot de passe oublié</Link>
        <span className="mx-2 text-gray-500">|</span>
        <Link to="/login" className="text-blue-500 hover:underline">Se connecter</Link>
      </div>
    </div>
  );
}

 