import React from 'react';
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
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}


export default Rutina;



