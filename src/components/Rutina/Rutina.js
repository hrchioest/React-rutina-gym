import React, { useState } from 'react';
import './Rutina.scss';



const Rutina = props =>{
    

    return (
        <div className={props.type}>
            <h1 className="title">{props.title}</h1>
            <table className ="table">
                <thead>
                    <tr className ="filas"> 
                        <th className="fila">Ejercicio</th>
                        <th className="fila">Series</th>
                        <th className="fila">Repeticiones</th>
                        <th className="fila">Descanso</th>
                        <th className="fila">Opción</th>
                    </tr>
                </thead>
                <tbody>
                    {props.rutina.map(serie =>{
                        return(
                            <tr key={serie.ejercicio}>
                                <td>{serie.ejercicio}</td>
                                <td>{serie.series}</td>
                                <td>{serie.repeticiones}</td>
                                <td>{serie.descanso}</td>
                                <td><button className="delete">{serie.eliminar}Eliminar</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="modalAdd">
                <h1>Add ejercicio a la rutina</h1>
                <input className="input" placeholder="ejercicio"></input>
                <input className="input"placeholder="series"></input>
                <input className="input"placeholder="repeticiones"></input>
                <input className="input"placeholder="descanso"></input>
                <button className="add">Add</button>
            </div>
        </div>
    );
}


export default Rutina;


