import React from "react";

export default class Historial extends React.Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>
          Selección previa:{" "}
          {this.props.opciones[this.props.opciones.length - 1]}
        </h3>
        <h4>Anteriores: </h4>
        <ul>
          {this.props.opciones
            .map((texto, i) => <li key={i}>{texto}</li>)
            .slice(0, this.props.opciones.length - 1)}
        </ul>
      </div>
    );
  }
}
