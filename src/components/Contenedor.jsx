import React from "react";
import Estructura from "./Estructura"

function Contenedor(props)  {
  //console.log(this.props)
  console.log(props.block.component, " - idpropio:" ,props.block.id, ' id del padre:', props.idPadre);
  return <div className="contenedor" id={props.block.id} onClick={props.eventos.onClick}>
      {props.block.hijos? 
          props.block.hijos.map((block) => {
              block.idPadre=props.block.id;
              return Estructura(block,props.block.id,props.eventos) }
            )
        
          :"no tiene hijos"        }
  </div>
}


export default Contenedor;