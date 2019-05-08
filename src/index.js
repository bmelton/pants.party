import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Auth from './Auth/Auth';
import App from './App';
import dotenv from 'dotenv';

const auth = new Auth();

dotenv.config();

ReactDOM.render(
 <BrowserRouter><App auth={auth} /></BrowserRouter>, 
 document.getElementById('root')
);
