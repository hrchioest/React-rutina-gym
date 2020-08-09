import React, { useContext } from "react";
import RutinasContext from "../../RutinasContext";

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
  export default Row;