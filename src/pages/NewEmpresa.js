import React from "react";

import { connect } from "react-redux";

import * as empresasActions from "../actions/empresasActions";

class NewEmpresa extends React.Component {
  constructor(props) {
    super(props);

    this.name = React.createRef();
    this.description = React.createRef();
  }

  handleSubmit() {
    this.props.crearEmpresa({
      name: this.name.current.value,
      description: this.description.current.value
    });
  }
  render() {
    return (
      <div className="new">
        <div className="content">
          <input
            type="text"
            ref={this.name}
            placeholder="Nombre de la empresa"
          />
          <input type="text" ref={this.description} placeholder="Descripción" />
          <button onClick={this.handleSubmit.bind(this)}>Crear</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.empresasReducer;
};

export default connect(mapStateToProps, empresasActions)(NewEmpresa);
