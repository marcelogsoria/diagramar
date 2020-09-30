import React from "react";

const Asignacion = (props) => {
  console.log(props.block.component, "idpropio: ", props.block.id, " - id del padre:" ,props.idPadre);
  return <div className="asignacion" id={props.block.id} onClick={props.eventos.onClick}>
    Asignación
    <h4>{props.block.sentencia}</h4>
  </div>
};

export default Asignacion;