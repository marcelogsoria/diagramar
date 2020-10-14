import React from "react";

/* const Asignacion = (props) => {
  console.log(props.block.component, "idpropio: ", props.block.id, " - id del padre:" ,props.idPadre);
  return <div className="asignacion" id={props.block.id} onClick={props.eventos.onClick}>
    Asignación
    <h4>{props.block.sentencia}</h4>
  </div>
}; */

const Asignacion = (props) => {
  console.log(props.block.component, "idpropio: ", props.block.id, " - id del padre:" ,props.idPadre);
  return <div className="bloque" id={props.block.id} onClick={props.eventos.onClick}>
    <div class="expresion" id={props.block.id}>{props.block.sentencia}</div>    
  </div>
};

export default Asignacion;