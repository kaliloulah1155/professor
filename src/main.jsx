import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import axios from "axios";
import { Provider } from 'react-redux';
 import { store } from './features/store';


//configuration axios
axios.defaults.baseURL ='http://localhost:8000/api';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('prof_token')}`;

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
        <Provider store={store} >
                    <App />
        </Provider>
    </BrowserRouter>
   
)
