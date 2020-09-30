import React from "react";

const Entrada = (props) => {
  console.log(props.block.component, " idpropio: ",props.block.id, " - id del padre:" ,props.idPadre);
  return <div className="entrada" id={props.block.id} onClick={props.eventos.onClick}>
    Entrada
    <h4 id={props.block.id}>{props.block.variable}</h4>
  </div>
};

export default Entrada;