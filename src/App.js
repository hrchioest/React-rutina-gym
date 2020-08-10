import React, { useReducer } from "react";
import "./App.css";
import initialState from "./initialState";
import RutinasContext from "./RutinasContext";
import { HashRouter } from "react-router-dom";
import Links from "./section/Links/Links";
import SwitchComponent from "./section/SwitchComponents/SwitchComponents";

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        console.log("state when add ... ", state);
        console.log("payload .. ", action.payload);
        return { rutinas: [...state.rutinas, action.payload] };
      case "delete":
        const clon = { ...state };
        //rutina y ejercicio
        // action.payload.rutina , action.payload.ejercicio
        const index = clon.rutinas.findIndex(
          (rut) =>
            rut.day === action.payload.day &&
            rut.exercise === action.payload.exercise
        );
        clon.rutinas.splice(index, 1);
        return clon;
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RutinasContext.Provider value={{ state, dispatch }}>
      <div>
        <h1 className="title">GYM - EXERCISE ROUTINE</h1>
        <HashRouter>
          <Links />
          <SwitchComponent />
        </HashRouter>
      </div>
    </RutinasContext.Provider>
  );
};
export default App;
