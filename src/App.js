import React, {useState, useReducer} from 'react';
import './App.css';
import {fontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFemale} from '@fortawesome/free-solid-svg-icons';

import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

  import Links from './section/Links/Links';
  import SwitchComponent from './section/SwitchComponents/SwitchComponents';


const App = () => {
  
    return (
        <div>
            <h1 className="title">RUTINA DE 5 DIAS</h1>
            <fontAwesomeIcon />
             <BrowserRouter>
                <Links />
                <SwitchComponent />
            </BrowserRouter>
        </div>
       
    
    );
}
export default App;
