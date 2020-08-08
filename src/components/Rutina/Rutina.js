import React, { useContext } from "react";
import RutinasContext from "../../RutinasContext";
import Modal from "../Modal/Modal";

import "./Rutina.scss";

const Rutina = ({ rutina, type, day }) => {
  return (
    <div className={type}>
      {/* <h1 className='title'>{props.title}</h1> */}
      <table className="table">
        <thead>
          <tr className="filas">
            <th className="fila">Exercises</th>
            <th className="fila">Series</th>
            <th className="fila">Break</th>
            <th className="fila">Option</th>
          </tr>
        </thead>
        <tbody>
          {rutina.map((serie, key) => {
            return <Row serie={serie} key={key} />;
          })}
        </tbody>
      </table>

      <Modal day={day} />
    </div>
  );
};

const Row = ({ serie }) => {
  const { dispatch } = useContext(RutinasContext);

  return (
    <tr>
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
                exercise: serie.exercise,
              },
            })
          }
          className="delete"
        >
          <i className="fas fa-trash-alt"></i>
          {serie.delete}
        </span>
      </td>
    </tr>
  );
};

export default Rutina;
