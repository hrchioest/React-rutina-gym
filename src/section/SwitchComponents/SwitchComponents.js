import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import Rutina1 from '../../components/Rutina1/Rutina1';
import Rutina2 from '../../components/Rutina2/Rutina2';
import Rutina3 from '../../components/Rutina3/Rutina3';
import Rutina4 from '../../components/Rutina4/Rutina4';
import Rutina5 from '../../components/Rutina5/Rutina5';

const SwitchComponent = () => {
    return (
        <Switch>
            <Route path="/rutina1" component={Rutina1} />
            
            <Route path="/rutina2">
                <Rutina2>Rutina 2</Rutina2>
            </Route>
            
            <Route path ="/rutina3">
                <Rutina3>Rutina 3</Rutina3>
            </Route>

            <Route path ="/rutina4">
                <Rutina4>Rutina 4</Rutina4>
            </Route>
            <Route path ="/rutina5" component ={Rutina5} />
             

            
        </Switch>
    )
};

export default SwitchComponent;