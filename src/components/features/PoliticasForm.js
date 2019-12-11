import React from "react";
import * as politicasActions from "../../actions/politicasActions";
import { connect } from "react-redux";
import SelectForm from "../SelectForm";

const { editarPolitica: politicasEditarPolitica } = politicasActions;

class PoliticasForm extends React.Component {
  constructor(props) {
    super(props);

    const { politicasReducer, empresasReducer } = this.props;

    const localReducer = politicasReducer;

    if (Object.keys(localReducer.data).length > 0) {
      this.state = {
        seguridad_info: localReducer.data.seguridad_info,
        revision_string: localReducer.data.revision_string
      };
    } else if (empresasReducer.data.politica) {
      this.state = {
        seguridad_info: empresasReducer.data.politica.seguridad_info,
        revision_string: empresasReducer.data.politica.revision_string
      };
    } else {
      this.state = {
        seguridad_info: "No realizado",
        revision_string: "No realizado"
      };
    }
  }

  sendChanges() {
    const { politicasEditarPolitica } = this.props;

    politicasEditarPolitica(this.props.empresa_id, {
      seguridad_info: this.state.seguridad_info,
      revision_string: this.state.revision_string
    });
  }

  render() {
    const { seguridad_info, revision_string } = this.state;

    return (
      <React.Fragment>
        <div className="item-info">
          Conjunto de politicas para la seguridad de la informacion:
          <SelectForm
            value={seguridad_info}
            handleSelect={e => {
              this.setState({
                seguridad_info: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          Revision de politicas para la seguridad de la informacion:
          <SelectForm
            value={revision_string}
            handleSelect={e => {
              this.setState({
                revision_string: e.target.value
              });
            }}
          />
        </div>

        <button onClick={this.sendChanges.bind(this)}>Actualizar</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ empresasReducer, politicasReducer }) => {
  return { empresasReducer, politicasReducer };
};

const mapDispatchToProps = {
  politicasEditarPolitica
};

export default connect(mapStateToProps, mapDispatchToProps)(PoliticasForm);
