import React from "react";
import { connect } from "react-redux";

import * as empresasActions from "../actions/empresasActions";

class NewEmpresa extends React.Component {
  constructor(props) {
    super(props);

    this.name = React.createRef();
    this.description = React.createRef();
  }

  async handleClick() {
    if (this.name.current.value && this.description.current.value) {
      await this.props.crearEmpresa({
        name: this.name.current.value,
        description: this.description.current.value
      });
      await this.props.traerTodos();
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

const mapStateToProps = reducers => {
  return reducers.empresasReducer;
};

export default connect(mapStateToProps, empresasActions)(NewEmpresa);
