import React, {useReducer} from 'react';
import './App.css';
import initialState from './initialState';
import {fontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Modal from './components/Modal/Modal';
import RutinasContext from './RutinasContext';
import { BrowserRouter } from 'react-router-dom';
import Links from './section/Links/Links';
import SwitchComponent from './section/SwitchComponents/SwitchComponents';


const App = () => {

    const reducer = (state, action) => {

        switch (action.type) {
            case 'add':
                return { rutinas: [...state.rutinas, action.payload] };
            case 'delete':
                const clon = {...state};
                //rutina y ejercicio
                // action.payload.rutina , action.payload.ejercicio
                const index = clon.rutinas.findIndex(rut => rut.rutina === action.payload.rutina && rut.ejercicio === action.payload.ejercicio);
                clon.rutinas.splice(index, 1);
                return clon;
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <RutinasContext.Provider value={ {state, dispatch} }>
            <div>
                <h1 className="title">RUTINA DE 5 DIAS</h1>
                <fontAwesomeIcon />
                <BrowserRouter>
                    <Links />
                    <SwitchComponent />
                </BrowserRouter>
                <Modal />
            </div>
        </RutinasContext.Provider>
       
    
    );
}
export default App;
