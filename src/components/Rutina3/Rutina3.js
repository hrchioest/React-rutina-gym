import React from 'react';
import Rutina from '../Rutina/Rutina';

const Rutina3 = () => {

     const remoMaquina = {
        ejercicio: 'Remo Máquina',
        series: '4',
        repeticiones:'12',
        descanso:'2 min',
    }
    const accesorioIsquio ={
        ejercicio: 'Accesorio Isquio',
        series: '3',
        repeticiones:'10-12',
        descanso:'1-2 min',
    }
    const pressMilitar = {
        ejercicio: 'Press Militar',
        series:'3',
        repeticiones: '10',
        descanso :'2'
    }
    const accesorioGluteo = {
        ejercicio: 'Accesorio Glúteo',
        series:'3',
        repeticiones: '15',
        descanso :'2'
    }


    const rutina3 = [remoMaquina, accesorioIsquio, pressMilitar, accesorioGluteo];
    
    return(
    
        <div>
            <Rutina
           type = "rutina3"
           title = "Rutina 3"
           rutina = {rutina3}
           />
        </div> 
     
    );
}

    


export default Rutina3;


