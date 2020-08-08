import React, { useReducer, useContext } from "react";
import "./Modal.scss";
import RutinasContext from "../../RutinasContext";

const Modal = (props) => {
  const { state, dispatch } = useContext(RutinasContext);

  let data = {
    day: null,
    exercise: null,
    series: null,
    break: null
  };

  const setDataInput = (event) => {
    let { name, value } = event.target;

    data = { ...data, [name]: value };
  };
  const add = () => {
    dispatch({ type: "add", payload: data });
  };

  return (
    <div className='modalAdd'>
      <h1>Add excercise</h1>
      <div className="wrapper-data">
        <select
          className='input'
          name='day'  
          onChange={setDataInput}
        >
          <option selected="true" disabled="disabled">Select day</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="tuesday">Tuesday</option>
          <option value="friday">Friday</option>
          
        </select>
          <input
            className='input'
            name='exercise'
            placeholder='exercise'
            onChange={setDataInput}
          ></input>
          <input
            className='input'
            name='series'
            placeholder='Series'
            onChange={setDataInput}
          ></input>
          <input
            className='input'
            name='break'
            placeholder='Break'
            onChange={setDataInput}
          ></input>
          <button onClick={add} className='add'>
            Add
          </button>
      </div>
    </div>
  );
};

export default Modal;
