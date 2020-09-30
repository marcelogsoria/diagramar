import React from "react";
import Contenedor from './Contenedor'
import './CicloIncondicional.css';

const CicloIncondicional = (props) => {
  console.log(props.block.component, "idpropio: ", props.block.id, " - id del padre:" ,props.idPadre);

  return <div className="cicloIncondicional" id={props.block.id} onClick={props.eventos.onClick}>
    Ciclo Incondicional
    <div onClick={props.eventos.onClick}>{props.block.variable} = {props.block.valorInicial}..({props.block.paso})..{props.block.valorFinal}</div>
    <div className="cicloIncondicionalMargenIzquierdo" id={props.block.id} onClick={props.eventos.onClick}>
    </div>
    <div className="cicloIncondicionalHijos" id={props.block.hijos.id} onClick={props.eventos.onClick}>
      hijos:
      {props.block.hijos? <Contenedor key={props.block.id} block={props.block.hijos} idPadre={props.block.id} eventos={props.eventos}/>:"no tengo hijos" }
    </div>
    <div className="cicloIncondicionalClear" onClick={props.eventos.onClick}></div>  
  </div>
}

export default CicloIncondicional;