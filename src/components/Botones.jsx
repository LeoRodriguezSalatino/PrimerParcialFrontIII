import React from "react";

export default class Boton extends React.Component {
  render() {
    return (
      <h2 className='opcion'>
        <input
          key={this.props.id}
          id={this.props.id}
          type="button"
          className="botones"
          value={this.props.id.toUpperCase()}
          onClick={this.props.onCambioOpcion}
        />
       {this.props.texto}
      </h2>
    );
  }
}
