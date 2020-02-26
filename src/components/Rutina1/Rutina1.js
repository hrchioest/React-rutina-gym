import React from 'react';
import Rutina from '../Rutina/Rutina';
import './Rutina1.scss';

const Rutina1 = () => {
   
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
    const pressMilitar = {
        ejercicio: 'Press Militar',
        series:'3',
        repeticiones: '10',
        descanso :'2'
    }
    const accesorioIsquio ={
        ejercicio: 'Accesorio Isquio',
        series: '3',
        repeticiones:'10-12',
        descanso:'1-2 min',
    }
    

    const rutina1 = [sentadilla, pesoMuerto, pressMilitar, accesorioIsquio];
    return(
    
        <div>
           <Rutina
           type = "rutina1"
           title = "Rutina 1"
           rutina = {rutina1}
           />
        </div> 
     
    );
}
export default Rutina1;