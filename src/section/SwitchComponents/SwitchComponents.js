import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Rutina from "../../components/Rutina/Rutina";
import RutinasContext from "../../RutinasContext";

const SwitchComponent = () => {
  const { state } = useContext(RutinasContext);
  return (
    <Switch>
      <Route path="/monday">
        <Rutina
          day="monday"
          type="day"
          rutina={state.rutinas.filter((day) => day.day === "monday")}
        />
      </Route>
      <Route path="/tuesday">
        <Rutina
          day="tuesday"
          type="day"
          rutina={state.rutinas.filter((day) => day.day === "tuesday")}
        />
      </Route>

      <Route path="/wednesday">
        <Rutina
          day="wednesday"
          type="day"
          rutina={state.rutinas.filter((day) => day.day === "wednesday")}
        />
      </Route>

      <Route path="/thursday">
        <Rutina
          day="thursday"
          type="day"
          rutina={state.rutinas.filter((day) => day.day === "thursday")}
        />
      </Route>

      <Route path="/friday">
        <Rutina
          day="friday"
          type="day"
          rutina={state.rutinas.filter((day) => day.day === "friday")}
        />
      </Route>
    </Switch>
  );
};

export default SwitchComponent;
