import React from 'react';
import Rutina from '../Rutina/Rutina';

const Rutina4 = () => {

    const jalonPecho = {
        ejercicio: 'Jalón al Pecho',
        series: '3',
        repeticiones:'8',
        descanso:'2 min',
    }
    const crucesPolea = {
        ejercicio: 'CrucesPolea',
        series: '2',
        repeticiones:'12',
        descanso:'5 min',
    }
    const sentadilla = {
        ejercicio:'sentadilla',
        series: '3',
        repeticiones:'8',
        descanso:'2 min',
    }
    const pesoMuerto = {
        ejercicio:'Peso muerto',
        series: '3',
        repeticiones:'8',
        descanso:'2 min',    
    }
    const rutina4 = [jalonPecho, crucesPolea, sentadilla, pesoMuerto];
    
   

    return(
    
        <div>
            <Rutina
           type = "rutina4"
           title = "Rutina 4"
           rutina = {rutina4}
           />
        </div> 
     
    );
     
}
export default Rutina4;