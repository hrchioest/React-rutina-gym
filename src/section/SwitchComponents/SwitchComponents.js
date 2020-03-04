import React, {useContext} from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import Rutina from '../../components/Rutina/Rutina';
import RutinasContext from '../../RutinasContext';

const SwitchComponent = () => {

    const {state} = useContext(RutinasContext);

    return (
        <Switch>
            {
                console.log(state.rutinas)
            }
            <Route path="/rutina1">
                <Rutina
                    type = "rutina1"
                    title = "Rutina 1"
                    rutina = { state.rutinas.filter(rutina => rutina.rutina === 1 ) }
                />
            </Route>
            
            <Route path="/rutina2">
                <Rutina
                    type = "rutina2"
                    title = "Rutina 2"
                    rutina = { state.rutinas.filter(rutina => rutina.rutina === 2 ) }
                />
            </Route>
            
            <Route path ="/rutina3">
                <Rutina
                    type = "rutina3"
                    title = "Rutina 3"
                    rutina = { state.rutinas.filter(rutina => rutina.rutina === 3 ) }
                />
            </Route>

            <Route path ="/rutina4">
                <Rutina
                    type = "rutina4"
                    title = "Rutina 4"
                    rutina = { state.rutinas.filter(rutina => rutina.rutina === 4 ) }
                />
            </Route>

            <Route path ="/rutina5">
                <Rutina
                    type = "rutina5"
                    title = "Rutina 5"
                    rutina = { state.rutinas.filter(rutina => rutina.rutina === 5 ) }
                />
            </Route>

        </Switch>
    )
};

export default SwitchComponent;