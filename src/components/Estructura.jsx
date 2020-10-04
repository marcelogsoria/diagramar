import React from "react";
import Entrada from "./Entrada";

import Asignacion from "./Asignacion";
import CicloCondicional from './CicloCondicional';
import CicloIncondicional from './CicloIncondicional';
import Salida from './Salida';
import Alternativa from './Alternativa';

const TiposEstructuras = {
  cicloCondicional: CicloCondicional,
  cicloIncondicional: CicloIncondicional,
  alternativa: Alternativa,
  asignacion: Asignacion,
  entrada: Entrada,
  salida: Salida,
};

function Estructura(block,idPadre,eventos) {

  if (typeof TiposEstructuras[block.component] !== "undefined") {
    let estructura=React.createElement(TiposEstructuras[block.component], {
      key: block.id,
      block: block,
      idPadre: idPadre,
      eventos: eventos,
    });
    return estructura;
  }
  else return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
};

export default Estructura;