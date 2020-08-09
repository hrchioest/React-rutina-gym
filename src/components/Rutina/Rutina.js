import React from "react";
import Modal from "../Modal/Modal";
import Row from "./Row"

import "./Rutina.scss";

const Rutina = ({ rutina, type, day }) => {
  return (
    <div className={type}>
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



export default Rutina;
