import React from "react";
import * as politicasActions from "../../actions/politicasActions";
import { connect } from "react-redux";
import SelectForm from "../SelectForm";

const {
  editarPolitica: politicasEditarPolitica,
  locationChange: politicasLocationChange
} = politicasActions;

class PoliticasForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seguridad_info: "No realizado",
      revision_string: "No realizado"
    };
  }

  componentDidMount() {
    this.props.politicasLocationChange(this.props.empresa_id);
  }

  seguridadInfoSelect(e) {
    this.setState({ seguridad_info: e.target.value });
  }

  resvisionStringSelect(e) {
    this.setState({ revision_string: e.target.value });
  }

  sendChanges() {
    const { politicasEditarPolitica } = this.props;

    politicasEditarPolitica(this.props.empresa_id, {
      seguridad_info: this.state.seguridad_info,
      revision_string: this.state.revision_string
    });
  }

  render() {
    const {
      seguridad_info,
      revision_string
    } = this.props.politicasReducer.data;

    return (
      <React.Fragment>
        <div>
          <div className="item-info">
            Conjunto de politicas para la seguridad de la informacion:
            <SelectForm
              value={seguridad_info}
              handleSelect={this.seguridadInfoSelect.bind(this)}
            />
          </div>

          <div className="item-info">
            Revision de politicas para la seguridad de la informacion:
            <SelectForm
              value={revision_string}
              handleSelect={this.resvisionStringSelect.bind(this)}
            />
          </div>

          <button onClick={this.sendChanges.bind(this)}>Actualizar</button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ politicasReducer }) => {
  return { politicasReducer };
};

const mapDispatchToProps = {
  politicasEditarPolitica,
  politicasLocationChange
};

export default connect(mapStateToProps, mapDispatchToProps)(PoliticasForm);