import React from 'react';
import Rutina from '../Rutina/Rutina';

const Rutina5 = () => {

    const accesorioCuads = {
        ejercicio:'Accesorio Cuads',
        series: '3',
        repeticiones:'10',
        descanso:'1-2 min',
    }
    const remoMaquina = {
        ejercicio: 'Remo Máquina',
        series: '4',
        repeticiones:'12',
        descanso:'2 min',
    }
    const PressBlanca = {
        ejercicio: 'Press Blanca',
        series: '3',
        repeticiones:'8',
        descanso:'2 min',
    }
    const jalonPecho = {
        ejercicio: 'Jalón al Pecho',
        series: '3',
        repeticiones:'8',
        descanso:'2 min',
    }
    const rutina5 = [accesorioCuads,remoMaquina, PressBlanca, jalonPecho];

    return(
    
        <div>
            <Rutina
           type = "rutina5"
           title = "Rutina 5"
           rutina = {rutina5}
           />
        </div> 
     
    );

}
export default Rutina5;