import React from "react";

class NewEmpresa extends React.Component {
  constructor(props) {
    super(props);

    this.name = React.createRef();
    this.description = React.createRef();
  }

  handleClick(e) {
    e.preventDefault();
    if (this.name.current.value && this.description.current.value) {
      this.props.crearEmpresa({
        name: this.name.current.value,
        description: this.description.current.value
      });
      window.location.replace("/");
    }
  }
  render() {
    return (
      <div className="new">
        <input type="text" ref={this.name} placeholder="Nombre de la empresa" />
        <input type="text" ref={this.description} placeholder="Descripción" />
        <button onClick={this.handleClick.bind(this)}>Crear</button>
      </div>
    );
  }
}

export default NewEmpresa;
