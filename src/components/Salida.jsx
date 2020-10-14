import React from "react";
import './Salida.css';

/* const Salida = (props) => {
  console.log(props.block.component, " idpropio: ",props.block.id, " - id del padre:" ,props.idPadre);
  return <div className="salida" id={props.block.id} onClick={props.eventos.onClick}>
    Salida
    <h2 id={props.block.id} onClick={props.eventos.onClick}>{props.block.variable}</h2>
  </div>
}; */

const Salida = (props) => {
  /* console.log(props.block.component, " idpropio: ",props.block.id, " - id del padre:" ,props.padre.state.id); */
  return <div className="bloque" id={props.block.id} onClick={props.eventos.onClick}>
    <div className="salida_izq"></div>
		<div className="salida_der"></div>
		<div className="expresion">{props.block.variable}</div>    
  </div>
};

export default Salida;