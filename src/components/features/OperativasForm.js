import React from "react";
import * as operativasActions from "../../actions/operativasActions";
import { connect } from "react-redux";
import SelectForm from "../SelectForm";

const { editarOperativa: operativasEditarOperativa } = operativasActions;

class OperativasForm extends React.Component {
  constructor(props) {
    super(props);

    const { operativasReducer, empresasReducer } = this.props;

    const localReducer = operativasReducer;

    if (Object.keys(localReducer.data).length > 0) {
      this.state = {
        codigoMalicioso: localReducer.data.codigoMalicioso,
        copiaSeguridad: localReducer.data.copiaSeguridad
      };
    } else if (empresasReducer.data.operativa) {
      this.state = {
        codigoMalicioso: empresasReducer.data.operativa.codigoMalicioso,
        copiaSeguridad: empresasReducer.data.operativa.copiaSeguridad
      };
    } else {
      this.state = {
        codigoMalicioso: "No realizado",
        copiaSeguridad: "No realizado"
      };
    }
  }

  sendChanges() {
    const { operativasEditarOperativa } = this.props;

    operativasEditarOperativa(this.props.empresa_id, {
      codigoMalicioso: this.state.codigoMalicioso,
      copiaSeguridad: this.state.copiaSeguridad
    });
  }

  render() {
    const { codigoMalicioso, copiaSeguridad } = this.state;

    return (
      <React.Fragment>
        <div className="item-info">
          Controles contra el código malicioso
          <SelectForm
            value={codigoMalicioso}
            handleSelect={e => {
              this.setState({
                codigoMalicioso: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          Copias de seguridad de la información
          <SelectForm
            value={copiaSeguridad}
            handleSelect={e => {
              this.setState({
                copiaSeguridad: e.target.value
              });
            }}
          />
        </div>

        <button onClick={this.sendChanges.bind(this)}>Actualizar</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ empresasReducer, operativasReducer }) => {
  return { empresasReducer, operativasReducer };
};

const mapDispatchToProps = {
  operativasEditarOperativa
};

export default connect(mapStateToProps, mapDispatchToProps)(OperativasForm);
