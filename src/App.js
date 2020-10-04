import React from 'react';
import './App.css';
import Contenedor from './components/Contenedor'

/*var contenedorBase = {
  component: "contenedor",
  hijos: [
    {
      component: "alternativa",
      condicion: "A>7",
      hijosVerdadero: {
        component: "contenedor",
        hijos: [
        {
            component: "entrada",
            variable: "B"
        },
        {
          component: "alternativa",
          condicion: "A>7 and B<C",
          headline: "Foo",
          hijosVerdadero: {
            component: "contenedor",
            hijos: [ {
                component: "entrada",
                variable: "C[I]",
                title: "hijo!!!s"
            }
          ]},
          hijosFalso: {
            component: "contenedor",
            hijos:[
              {
                  component: "entrada",
                  variable: "A[I]",
                  title: "hijo!!!s"
              }
            ]
        }
        }
      ]
      },
      hijosFalso: {
        component:"contenedor",
        hijos:[
        {
            component: "entrada",
            title: "hijo!!!s"
        },
        {
          component: "cicloCondicional",
          condicion: "A>100",
          paso: "2",
          hijos: {
            component:"contenedor",
            hijos:[
              {
                component: "asignacion",
                sentencia: "A=A+1",
              },
              {
                component: "asignacion",
                headline: "Anoth0r headline",
                sentencia: "A=A+1",
              },
            
            ]
          }
        },
        {
          component: "cicloIncondicional",
          variable: "A",
          valorInicial: "1",
          valorFinal: "100",
          paso: "2",
          headline: "Anoth0r headline",
          hijos: {
            component: "contenedor",
            hijos: [
              {
                component: "asignacion",
                headline: "Anossssssssssth0r headline",
                sentencia: "A=A+1",
              },
              {
                component: "asignacion",
                headline: "Anothssssssssssssssssssssss0r headline",
                sentencia: "A=A+1",
              },
            
            ]
          }
        }

      ]
    }
    },
    {
      component: "entrada",
      variable:"A[i]",
    },
    {
      component: "asignacion",
      sentencia:"B[j] = 33*D",
    },
    {
      component: "cicloCondicional",
      condicion: "B>9 & A>90",
      hijos: {
        component: "contenedor",
        hijos: [
          {
            component: "asignacion",
            sentencia: "B=B*20"
          },
          {
            component: "asignacion",
            sentencia: "B=A*20"
          },
        
        ]
      }
    },

  ]
};*/

var contenedorBase = {
  component: "contenedor",
  hijos: [
    {
      component: "alternativa",
      condicion: "A>7 and B<C",
      headline: "Foo",
      hijosVerdadero: {
        component: "contenedor",
        hijos: [ {
            component: "entrada",
            variable: "C[I]",
            title: "hijo!!!s"
        }
      ]},
      hijosFalso: {
        component: "contenedor",
        hijos:[
          {
              component: "entrada",
              variable: "A[I]",
              title: "hijo!!!s"
          }
        ]
      }
    },
    {
      component: "asignacion",
      sentencia: "B=A*20"
    },
    {
      component: "entrada",
      variable: "B"
    },
    {
      component: "salida",
      variable: "B[2]"
    },
    {
      component: "cicloCondicional",
      condicion: "A>100",
      paso: "2",
      hijos: {
        component:"contenedor",
        hijos: [
          {
            component: "entrada",
            variable: "B"
          },
          {
            component: "salida",
            variable: "B[2]"
          },
        ]
      }
    },
    {
      component: "cicloIncondicional",
      variable: "A",
      valorInicial: "1",
      valorFinal: "100",
      paso: "2",
      headline: "Anoth0r headline",
      hijos: {
        component: "contenedor",
        hijos: [
          {
            component: "salida",
            variable: "B[2]"
          },
        ]
      }
    }
]
};

class App extends React.Component {
  constructor(props) {
    super(props);
    let datosProximaEstructura={
      padre:null,
      id:1,
    }
    let arrayIds=[];
    this.procesarContenedor(contenedorBase,datosProximaEstructura,arrayIds);

    this.state={
      contenedorBase:contenedorBase,
      seleccionActual: {
        posicion:0,
        estructura:contenedorBase,
        contenedor: null},
      estructurasPorId: arrayIds,
      proximoIdAAsignar: datosProximaEstructura.id,
    }
    this.buscarEstructura= this.buscarEstructura.bind(this);
    //this.buscarEnContenedor= this.buscarEnContenedor.bind(this);
    this.borrarUnaEstructura= this.borrarUnaEstructura.bind(this);
    this.agregarUnaEstructura= this.agregarUnaEstructura.bind(this);
    this.agregarUnaEntrada= this.agregarUnaEntrada.bind(this);
    this.agregarUnaAlternativa= this.agregarUnaAlternativa.bind(this);
    this.agregarUnCicloIncondicional= this.agregarUnCicloIncondicional.bind(this);
    this.agregarUnCicloCondicional= this.agregarUnCicloCondicional.bind(this);
    this.agregarUnaAsignacion= this.agregarUnaAsignacion.bind(this);
    this.agregarUnaSalida= this.agregarUnaSalida.bind(this);
    this.asignarNuevaId= this.asignarNuevaId.bind(this);
  }
  render() {
    return <div className="App">
      <h1>Test Diagramar</h1>
      <span>Seleccionado {this.state.seleccionActual.component} 
        (id:{this.state.seleccionActual.id}) </span>
      <span>Contenedor:  {this.state.estructurasPorId[this.state.seleccionActual.idPadre]? 
          this.state.estructurasPorId[this.state.seleccionActual.idPadre].component  
          + " id:"  + this.state.estructurasPorId[this.state.seleccionActual.idPadre].id: "nulo"} </span>
      <button  onClick={this.borrarUnaEstructura}>- 1</button>
      <button  onClick={this.agregarUnaEntrada}>+ Ent</button>
      <button  onClick={this.agregarUnaAlternativa}>+ IF</button>
      <button  onClick={this.agregarUnCicloIncondicional}>+ FOR</button>
      <button  onClick={this.agregarUnCicloCondicional}>+ While</button>
      <button  onClick={this.agregarUnaAsignacion}>+ Asig</button>
      <button  onClick={this.agregarUnaSalida}>+ Salida</button>
      <Contenedor key={this.state.contenedorBase.id} block={this.state.contenedorBase} idPadre="0" eventos={{onClick:this.buscarEstructura}} />
    </div>
  };

  asignarNuevaId(estructura) {
    if (estructura===undefined) {
      return false;
    }
    else {
      let proximoId=this.state.proximoIdAAsignar;
      estructura.id=proximoId;
      proximoId++;

      switch (estructura.component) {
        case "alternativa":
          estructura.hijosVerdadero.id=proximoId;
          proximoId++;
          estructura.hijosFalso.id=proximoId;
          proximoId++;
        
          break;
        case "cicloCondicional":
          estructura.hijos.id=proximoId;
          proximoId++;
          break;
        case "cicloIncondicional":
            estructura.hijos.id=proximoId;
            proximoId++;
            break;
          default:
      }

      this.setState({proximoIdAAsignar: proximoId});
      return estructura;
    }
  }

  buscarEstructura(e){ 
    e.stopPropagation()
    if (''!==e.target.id){
      //let estructuraClickeada=this.buscarEnContenedor(this.state.contenedorBase,e.target.id);
      let estructuraClickeada=this.state.estructurasPorId[e.target.id];
      if(typeof(estructuraClickeada)!=="undefined"){
        this.setState({seleccionActual:estructuraClickeada})
      }
      console.log(e.target)
      console.log(estructuraClickeada);
    }

  }
  
  /*buscarEnContenedor(contenedor,id){
    let result=false;
    let encontrado=false;
    let pos=0;
    while (!encontrado && pos<=(contenedor.hijos.length-1) ) {
      let elementoActual=contenedor.hijos[pos];
      //verifica el elemento en sí
      if(parseInt(id)===parseInt(elementoActual.id)) {
        result={
          posicion:pos,
          estructura:contenedor.hijos[pos],
          contenedor:contenedor
        };
        encontrado=true;
      }
      //verifica los contenedores y los hijos del componente alternativa
      else if ("alternativa"===elementoActual.component) {
        if(parseInt(id)===parseInt(elementoActual.hijosVerdadero.id)) {
          result={
            posicion:pos,
            estructura:elementoActual.hijosVerdadero,
            contenedor:elementoActual,
          };
          encontrado=true;
        }
        else if(parseInt(id)===parseInt(elementoActual.hijosFalso.id)) {
          result={
            posicion:pos,
            estructura:elementoActual.hijosFalso,
            contenedor:elementoActual,
          };
          encontrado=true;
        }
        else {
          let busquedaEnContenedorVerdadero=this.buscarEnContenedor(elementoActual.hijosVerdadero,id);
          if (false!==busquedaEnContenedorVerdadero) {
            //hubo coincidencia en el contenedor verdadero
            result={
              posicion:busquedaEnContenedorVerdadero.posicion,
              estructura:busquedaEnContenedorVerdadero.estructura,
              contenedor:busquedaEnContenedorVerdadero.contenedor,
            };
            encontrado=true;
          }
          else {
            let busquedaEnContenedorFalso=this.buscarEnContenedor(elementoActual.hijosFalso,id);
            if (false!==busquedaEnContenedorFalso) {
              //hubo coincidencia en el contenedor falso
              result={
                posicion:busquedaEnContenedorFalso.posicion,
                estructura:busquedaEnContenedorFalso.estructura,
                contenedor:busquedaEnContenedorFalso.contenedor,
              };
              encontrado=true;
            }
          }
 
        }
      }
      //verifica los hijos del componente ciclo condicional
      else if ("cicloCondicional"===elementoActual.component) {
        if(parseInt(id)===parseInt(elementoActual.hijos.id)) {
          result={
            posicion:pos,
            estructura:elementoActual.hijos,
            contenedor:elementoActual,
          };
          encontrado=true;
        }
        else {
          let busquedaEnContenedor=this.buscarEnContenedor(elementoActual.hijos,id);
          if (false!==busquedaEnContenedor) {
            //hubo coincidencia en el contenedor
            result={
              posicion:busquedaEnContenedor.posicion,
              estructura:busquedaEnContenedor.estructura,
              contenedor:busquedaEnContenedor.contenedor,
            };
            encontrado=true;
          }
        }
      }
      //verifica los hijos del componente ciclo incondicional
      else if ("cicloIncondicional"===elementoActual.component) {
        if(parseInt(id)===parseInt(elementoActual.hijos.id)) {
          result={
            posicion:pos,
            estructura:elementoActual.hijos,
            contenedor:elementoActual,
          };
          encontrado=true;
        }
        else {
          let busquedaEnContenedor=this.buscarEnContenedor(elementoActual.hijos,id);
          if (false!==busquedaEnContenedor) {
            //hubo coincidencia en el contenedor
            result={
              posicion:busquedaEnContenedor.pos,
              estructura:busquedaEnContenedor.estructuraClickeada,
              contenedor:busquedaEnContenedor.contenedor,
            };
            encontrado=true;
          }
        }
      }

      //si no se encontró pasa al siguiente elemento
      if (!encontrado) {
        pos++;
      }
    }

    return result;
  }*/

  borrarUnaEstructura(){
    if (1===parseInt(this.state.seleccionActual.id)) {
      console.log('no se puede borrar el contenedor base');
    }
    else if ("contenedor"===this.state.seleccionActual.component){
      console.log('no se puede borrar un contenedor');
    }
    else {
      if(typeof this.state.seleccionActual.idPadre !== "undefined") {
          let idPadre=this.state.seleccionActual.idPadre;
          let padre=this.state.estructurasPorId[idPadre]
          if(typeof padre !== "undefined") {
            let posicionEnHijos=padre.hijos.findIndex(element=>element.id===this.state.seleccionActual.id);
            if (posicionEnHijos >=0) {
              //borra con splice
              padre.hijos.splice(posicionEnHijos, 1);
              
              //actualiza estado
              let nuevoContenedorBase = {
                  id: "1",
                  component: "contenedor",
                  hijos: this.state.contenedorBase.hijos.slice(),
              };
          
              this.setState({contenedorBase:nuevoContenedorBase});
              this.setState({seleccionActual: {
                posicion:0,
                estructura:contenedorBase,
                contenedor: null}
              });
        


            }            
            else {
              console.log('No se encontró la estrcuctura en los hijos del padre');
            }
          }
          else {
            console.log('No se encontró el padre de la estructura');
          }
      }
      else {
        console.log('No se encontró el id del padre de la estructura');
      }

    }
  }

  agregarUnaEstructura(nuevaEstructura) {

    let nuevoHijo=this.asignarNuevaId(nuevaEstructura);
    
    if ("contenedor"===this.state.seleccionActual.component){
      nuevoHijo.idPadre=this.state.seleccionActual.estructura.id;
      this.state.seleccionActual.estructura.hijos.push(nuevoHijo);
    }
    else {
      let padre=this.state.estructurasPorId[this.state.seleccionActual.idPadre];
      nuevoHijo.idPadre=padre.id;
      let posicionEnHijos=padre.hijos.findIndex(element=>element.id===this.state.seleccionActual.id);
      padre.hijos.splice(posicionEnHijos, 0, nuevoHijo);

    }

    let nuevoContenedorBase = {
      id: "1",
      component: "contenedor",
      hijos: this.state.contenedorBase.hijos.slice(),
    };

    let nuevoArrayEstructurasPorId=this.state.estructurasPorId.slice();
    nuevoArrayEstructurasPorId[nuevoHijo.id]=nuevoHijo;
    //para disparar eventos de actualizacion
    this.setState(
      {contenedorBase:nuevoContenedorBase,
        estructurasPorId:nuevoArrayEstructurasPorId,
      });

  }

  agregarUnaEntrada() {
    let nuevaEstructura={
      id: "a4",
      component: "entrada",
      variable: "AB"
    };

    this.agregarUnaEstructura(nuevaEstructura);

  }
  agregarUnaAlternativa() {
    let nuevaEstructura= {
      id: "",
      component: "alternativa",
      condicion: "A>7",
      hijosVerdadero: {
        id: "",
        component: "contenedor",
        hijos: []
      },
      hijosFalso: {
        id: "",
        component: "contenedor",
        hijos: []
      },
    };

    this.agregarUnaEstructura(nuevaEstructura);
  }
  agregarUnCicloIncondicional() {
    let nuevaEstructura={
      id: "fd16",
      component: "cicloIncondicional",
      variable: "A",
      valorInicial: "1",
      valorFinal: "100",
      paso: "2",
      hijos:  {
        id:"cc13",
        component:"contenedor",
        hijos:[
        ]
      }
    }


    this.agregarUnaEstructura(nuevaEstructura);
  }
  agregarUnCicloCondicional() {
    let nuevaEstructura=
      {
        id: "c12",
        component: "cicloCondicional",
        condicion: "A>100",
        hijos: {
          id:"cc13",
          component:"contenedor",
          hijos:[
          ]
        }
    };

    this.agregarUnaEstructura(nuevaEstructura);
  }
  agregarUnaAsignacion() {
    let nuevaEstructura={
      id: "a4",
      component: "asignacion",
      sentencia: "AB=BC*5+1"
    };

    this.agregarUnaEstructura(nuevaEstructura);
  }
  agregarUnaSalida() {
    let nuevaEstructura={
      id: "s4",
      component: "salida",
      variable: "ACD"
    };

    this.agregarUnaEstructura(nuevaEstructura);
  }
/**
 * 
 * @param {contenedor} contenedor 
 * @param {Object {padre:  id:}  } datosProximaEstructura 
 */
  procesarContenedor(contenedor, datosProximaEstructura, arrayIds) {
    if (null===datosProximaEstructura.padre) {
      contenedor.idPadre=0;
    }
    else {
      contenedor.idPadre=datosProximaEstructura.padre.id;
    }
    contenedor.id=datosProximaEstructura.id;
    datosProximaEstructura.id++;
    arrayIds[contenedor.id]=contenedor;
    contenedor.hijos.forEach( (estructura,index) => {
      switch(estructura.component){
        case "alternativa":
          estructura.padre=contenedor.id;
          estructura.id=datosProximaEstructura.id;
          arrayIds[estructura.id]=estructura;
          datosProximaEstructura.id++;
          
          datosProximaEstructura.padre=estructura;
          this.procesarContenedor(estructura.hijosVerdadero,datosProximaEstructura, arrayIds);

          datosProximaEstructura.padre=estructura;
          this.procesarContenedor(estructura.hijosFalso,datosProximaEstructura, arrayIds);
          
          break;

        case "asignacion":
          estructura.padre=contenedor.id;
          estructura.id=datosProximaEstructura.id;
          arrayIds[estructura.id]=estructura;
          datosProximaEstructura.id++;
          break;
        
        case "cicloCondicional":
          estructura.padre=contenedor.id;
          estructura.id=datosProximaEstructura.id;
          arrayIds[estructura.id]=estructura;
          datosProximaEstructura.id++;
          
          datosProximaEstructura.padre=estructura;
          this.procesarContenedor(estructura.hijos,datosProximaEstructura, arrayIds);
          break;

        case "cicloIncondicional":
          estructura.padre=contenedor.id;
          estructura.id=datosProximaEstructura.id;
          arrayIds[estructura.id]=estructura;
          datosProximaEstructura.id++;
          
          datosProximaEstructura.padre=estructura;
          this.procesarContenedor(estructura.hijos,datosProximaEstructura, arrayIds);
          break;

        case "entrada":
          estructura.padre=contenedor.id;
          estructura.id=datosProximaEstructura.id;
          arrayIds[estructura.id]=estructura;
          datosProximaEstructura.id++;
          break;

        case "salida":
          estructura.padre=contenedor.id;
          estructura.id=datosProximaEstructura.id;
          arrayIds[estructura.id]=estructura;
          datosProximaEstructura.id++;
          break;

        default:
          console.log("No se pudo identificar la estructura al procesar el contenedor.", estructura);
          break;
        }
    });

  }
  
  
}



export default App;
