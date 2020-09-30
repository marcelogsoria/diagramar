import React from "react";
import Contenedor from './Contenedor'
import './CicloCondicional.css';

const CicloCondicional = (props) => {
  console.log(props.block.component, "idpropio: ", props.block.id, " - id del padre:" ,props.idPadre);
  return <div className="cicloCondicional" id={props.block.id} onClick={props.eventos.onClick}>
    Ciclo Condicional 
    <div onClick={props.eventos.onClick}>{props.block.condicion}</div>
    <div className="cicloCondicionalMargenIzquierdo" onClick={props.eventos.onClick}>
    </div>
    <div className="cicloCondicionalHijos" id={props.block.hijos.id} onClick={props.eventos.onClick}>
      hijos:
      {props.block.hijos? <Contenedor key={props.block.id} block={props.block.hijos} idPadre={props.block.id} eventos={props.eventos}/>:"no tengo hijos" }
    </div>
    <div className="cicloCondicionalClear" onClick={props.eventos.onClick}></div>  
  </div>
}

export default CicloCondicional;