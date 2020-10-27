import React from "react";
import './Entrada.css';

/* const Entrada = (props) => {
  console.log(props.block.component, " idpropio: ",props.block.id, " - id del padre:" ,props.idPadre);
  return <div className="entrada" id={props.block.id} onClick={props.eventos.onClick}>
    Entrada
    <h4 id={props.block.id}>{props.block.variable}</h4>
  </div>
}; */

const Entrada = (props) => {
  console.log(props.block.component, " idpropio: ",props.block.id, " - id del padre:" ,props.idPadre);
  return <div className="bloque">
    <div className="entrada" id={props.block.id} onClick={props.eventos.onClick}> </div>       
		<div className="expresion" id={props.block.id}>{props.block.variable}</div>		  
  </div>
}


export default Entrada;