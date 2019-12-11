import React from "react";
import * as desarrollosActions from "../../actions/desarrollosActions";
import { connect } from "react-redux";
import SelectForm from "../SelectForm";

const { editarDesarrollo: desarrollosEditarDesarrollos } = desarrollosActions;

class DesarrollosForm extends React.Component {
  constructor(props) {
    super(props);

    const { desarrollosReducer, empresasReducer } = this.props;

    const localReducer = desarrollosReducer;

    if (Object.keys(localReducer.data).length > 0) {
      this.state = {
        politica: localReducer.data.politica,
        seguridad: localReducer.data.seguridad,
        funcionalidad: localReducer.data.funcionalidad,
        aceptacion: localReducer.data.aceptacion
      };
    } else if (empresasReducer.data.desarrollo) {
      this.state = {
        politica: empresasReducer.data.desarrollo.politica,
        seguridad: empresasReducer.data.desarrollo.seguridad,
        funcionalidad: empresasReducer.data.desarrollo.funcionalidad,
        aceptacion: empresasReducer.data.desarrollo.aceptacion
      };
    } else {
      this.state = {
        politica: "No realizado",
        seguridad: "No realizado",
        funcionalidad: "No realizado",
        aceptacion: "No realizado"
      };
    }
  }

  sendChanges() {
    const { desarrollosEditarDesarrollos } = this.props;

    desarrollosEditarDesarrollos(this.props.empresa_id, {
      politica: this.state.politica,
      seguridad: this.state.seguridad,
      funcionalidad: this.state.funcionalidad,
      aceptacion: this.state.aceptacion
    });
  }

  render() {
    const { politica, seguridad, funcionalidad, aceptacion } = this.state;

    return (
      <React.Fragment>
        <div className="item-info">
          Política de desarrollo seguro de software
          <SelectForm
            value={politica}
            handleSelect={e => {
              this.setState({
                politica: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          Seguridad en entornos de desarrollo
          <SelectForm
            value={seguridad}
            handleSelect={e => {
              this.setState({
                seguridad: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          Pruebas de funcionalidad durante el desarrollo de los sistemas
          <SelectForm
            value={funcionalidad}
            handleSelect={e => {
              this.setState({
                funcionalidad: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          Pruebas de aceptación
          <SelectForm
            value={aceptacion}
            handleSelect={e => {
              this.setState({
                aceptacion: e.target.value
              });
            }}
          />
        </div>

        <button onClick={this.sendChanges.bind(this)}>Actualizar</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ empresasReducer, desarrollosReducer }) => {
  return { empresasReducer, desarrollosReducer };
};

const mapDispatchToProps = {
  desarrollosEditarDesarrollos
};

export default connect(mapStateToProps, mapDispatchToProps)(DesarrollosForm);
