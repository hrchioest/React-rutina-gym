import React, { useReducer, useContext } from 'react';
import './Modal.scss'
import RutinasContext from '../../RutinasContext';

const Modal = props =>{

    const { state, dispatch } = useContext(RutinasContext);

    let data = {
        rutina: null,
        ejercicio:null,
        series:null,
        repeticiones:null,
        descanso:null,
    };

    const setDataInput = event =>{
        let { name, value } = event.target;

        if(name === 'rutina'){
            value = parseInt(value);
        }

        data = {...data, [name]:value};
        console.log(data);
    }
    const add = () => {
        dispatch({type:"add", payload: data} );
    }

    return(

        <div className="modalAdd">
            <h1>Add ejercicio a la rutina</h1>
            <input className="input" name="rutina" placeholder="rutina" onChange={setDataInput}></input>
            <input className="input" name="ejercicio" placeholder="ejercicio"onChange={setDataInput}></input>
            <input className="input" name="series" placeholder="series" onChange={setDataInput}></input>
            <input className="input" name="repeticiones" placeholder="repeticiones" onChange={setDataInput}></input>
            <input className="input" name="descanso" placeholder="descanso" onChange={setDataInput}></input>
            <button onClick ={add} className="add">Add</button>
        </div>
    )
}

export default Modal;
            