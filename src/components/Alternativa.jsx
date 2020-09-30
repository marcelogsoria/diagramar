import React from "react";
import Contenedor from './Contenedor'
import './Alternativa.css';

const Alternativa = (props) => {
  console.log(props.block.component, "idpropio: ", props.block.id, " - id del padre:" ,props.idPadre);
  //props.block.hijosFalso.idPadre=props.block.id;
  //props.block.hijosVerdadero.idPadre=props.block.id;
  return (<div className="alternativa" onClick={props.eventos.onClick} id={props.block.id}>
    <div id={props.block.id} onClick={props.eventos.onClick}>
    IF: {props.block.condicion}
    </div>
    <div className="alternativaVerdadero" id={props.block.hijosVerdadero.id} onClick={props.eventos.onClick}>
      Hijos Verdadero:
      {props.block.hijosVerdadero? <Contenedor key={props.block.hijosVerdadero.id} block={props.block.hijosVerdadero} idPadre={props.block.id} eventos={props.eventos}/>:"no tengo"}
    </div>
    <div className="alternativaFalso" id={props.block.hijosFalso.id} onClick={props.eventos.onClick}>
      Hijos Falso:
      {props.block.hijosFalso? <Contenedor key={props.block.hijosFalso.id} block={props.block.hijosFalso} idPadre={props.block.id} eventos={props.eventos}/>:"no tengo"}
    </div>
    <div className="alternativaClear"></div>      
  </div>);
}

export default Alternativa;