import React, { useContext, useState, useEffect } from "react";
import "./Modal.scss";
import RutinasContext from "../../RutinasContext";

let data = {
  day: "",
  exercise: "",
  series: "",
  break: "",
};

const Modal = ({ day }) => {
  const { dispatch } = useContext(RutinasContext);

  const [values, setValues] = useState(data);

  const setDataInput = (event) => {
    let { name, value } = event.target;

    setValues((state) => {
      return { ...state, [name]: value };
    });
  };
  const add = () => {
    dispatch({ type: "add", payload: values });
    setValues((state) => {
      return { ...data, day };
    });
  };

  useEffect(() => {
    setValues((state) => {
      return { ...state, day };
    });
  }, [day]);

  return (
    <div className="modalAdd">
      <h2>Add excercise</h2>
      <div className="wrapper-data">
        <input
          value={values.exercise}
          className="input"
          name="exercise"
          placeholder="exercise"
          onChange={setDataInput}
        ></input>
        <input
          value={values.series}
          type= "number"
          className="input"
          name="series"
          placeholder="Series"
          onChange={setDataInput}
        ></input>
        <select
          value={values.break}
          className="input"
          name="break"
          onChange={setDataInput}
        >
          <option value="break">Break</option>
          <option value="2min">2 min</option>
          <option value="3min">3 min</option>
          <option value="4min">4 min</option>
          <option value="5min">5 min</option>
        </select>
        <button onClick={add} className="add">
          Add
        </button>
      </div>
    </div>
  );
};

export default Modal;
