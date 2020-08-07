import React, { useReducer, useContext } from "react";
import RutinasContext from "../../RutinasContext";
import "./Rutina.scss";

const Rutina = (props) => {
  const { state, dispatch } = useContext(RutinasContext);

  return (
    <div className={props.type}>
      {/* <h1 className='title'>{props.title}</h1> */}
      <table className='table'>
        <thead>
          <tr className='filas'>
            <th className='fila'>Exercises</th>
            <th className='fila'>Series</th>
            <th className='fila'>break</th>
            <th className='fila'>Option</th>
          </tr>
        </thead>
        <tbody>
          {props.rutina.map((serie) => {
            return (
              <tr key={serie.day}>
                <td>{serie.exercise}</td>
                <td>{serie.series}</td>
                <td>{serie.break}</td>
                <td>
                  <span
                    onClick={(e) =>
                      dispatch({
                        type: "delete",
                        payload: {
                          day: serie.day,
                          exercise: serie.exercise
                        }
                      })
                    }
                    className='delete'
                  ><i class="fas fa-trash-alt"></i>
                    {serie.delete}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Rutina;
