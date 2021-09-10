import React from "react";
import Boton from "./components/Botones";
import Historial from "./components/Historial";
import historiasJson from "./components/data.json";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      historias: [],
      actual: {},
      id: 1,
      opciones: [],
    };
  }

  handlerCambioOpcion = (e) => {
    const opc = e.target.id;
    if (!this.state.actual.opciones[`${opc}`].includes("FIN")) {
      const proxima = this.state.historias.find(
        (h) => (this.state.id + 1).toString() + opc === h.id
      );
      this.setState({
        actual: proxima,
        id: parseInt(proxima.id.substring(0, proxima.id.length - 1)),
        opciones: [...this.state.opciones, opc.toUpperCase()],
      });
    }
  };

  componentDidMount = () => {
    setTimeout(() => this.setState({historias: historiasJson,
      actual: historiasJson[0]}), 3000);
  }

  render() {
    return (
      (this.state.historias.length === 0) ?
        <h1 className='cargando'>Cargando...</h1> :
        <>
        <div className="layout">
          <h1 className="historia">{this.state.actual.historia}</h1>

          <div className="opciones">
            <Boton
              id={"a"}
              onCambioOpcion={this.handlerCambioOpcion}
              texto={this.state.actual.opciones.a}
            />
            <Boton
              id={"b"}
              onCambioOpcion={this.handlerCambioOpcion}
              texto={this.state.actual.opciones.b}
            />
          </div>
          <Historial opciones={this.state.opciones}/>
        </div>
      </>
    );
  }
}
