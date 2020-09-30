import React from "react";

const Salida = (props) => {
  console.log(props.block.component, " idpropio: ",props.block.id, " - id del padre:" ,props.idPadre);
  return <div className="salida" id={props.block.id} onClick={props.eventos.onClick}>
    Salida
    <h2 id={props.block.id} onClick={props.eventos.onClick}>{props.block.variable}</h2>
  </div>
};

export default Salida;