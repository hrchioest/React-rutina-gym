import React from 'react';
import './Rutina2.scss';
import Rutina from '../Rutina/Rutina';


const Rutina2 = () =>{
   
    const accesorioGluteo = {
        ejercicio: 'Accesorio Glúteo',
        series:'3',
        repeticiones: '15',
        descanso :'2'
    }
    const accesorioCuads = {
        ejercicio:'Accesorio Cuads',
        series: '3',
        repeticiones:'10',
        descanso:'1-2 min',
    }
    const PressBlanca = {
        ejercicio: 'Press Blanca',
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
    const rutina2 = [accesorioGluteo, accesorioCuads, PressBlanca, crucesPolea];

    return (
        <div>
            <Rutina
           type = "rutina2"
           title = "Rutina 2"
           rutina = {rutina2}
           />
        </div> 
    );
}

export default Rutina2;