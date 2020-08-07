import React, { useContext } from "react";
import { Switch, Route, Router } from "react-router-dom";
import Rutina from "../../components/Rutina/Rutina";
import RutinasContext from "../../RutinasContext";

const SwitchComponent = () => {
  const { state } = useContext(RutinasContext);

  console.log(state);
  return (
    <Switch>
      <Route path='/dayMonday'>
        <Rutina
          type='day'
          rutina={state.rutinas.filter((day) => day.day === 'monday')}
        />
      </Route>
      <Route path='/dayTuesday'>
        <Rutina
          type='day'
          rutina={state.rutinas.filter((day) => day.day === 'tuesday')}
        />
      </Route>

      <Route path='/dayWednesday'>
        <Rutina
          type='day'
          rutina={state.rutinas.filter((day) => day.day === 'wednesday')}
        />
      </Route>

      <Route path='/dayThurday'>
        <Rutina
          type='day'
          rutina={state.rutinas.filter((day) => day.day === 'tuesday')}
        />
      </Route>

      <Route path='/dayFriday'>
        <Rutina
          type='day'
          title='friday'
          rutina={state.rutinas.filter((day) => day.day === 'friday')}
        />
      </Route>
     
    </Switch>
  );
};

export default SwitchComponent;
