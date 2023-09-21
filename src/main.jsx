import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import axios from "axios";
import { Provider } from 'react-redux';
import { store, persistor } from './features/store';
import { PersistGate } from 'redux-persist/integration/react';


//configuration axios
axios.defaults.baseURL ='http://localhost:8000/api';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('prof_token')}`;

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
        <Provider store={store} >
            <PersistGate loading={null} persistor={persistor}>
                    <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>
   
)
