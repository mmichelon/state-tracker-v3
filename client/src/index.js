import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App/App';

//Added for firebase
import './config/firebase-config';


render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));
