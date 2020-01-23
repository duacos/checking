import React from "react";
import * as empresasActions from "../actions/empresasActions";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import "../styles/ViewStyles.sass";
import Pacman from "../components/Pacman";

import FeatureMain from "../components/features/FeatureMain";

const {
  traerUno: empresasTraerUno,
  locationChange: empresasLocationChange
} = empresasActions;

class EditEmpresa extends React.Component {
  componentDidMount() {
    this.props.empresasTraerUno(this.props.match.params.empresa_id);
    this.props.empresasLocationChange(this.props.match.params.empresa_id);
  }
  render() {
    const { data } = this.props.empresasReducer;
    const { loading } = this.props.empresasReducer;

    if (loading === true) {
      return <Pacman />;
    }

    return (
      <div className="view">
        <div className="content">
          <div className="view-title">
            <h1>{data.name}</h1>
            <h3>{data.description}</h3>
            <Link
              className="switch-view"
              to={"/empresas/" + this.props.match.params.empresa_id}
            >
              <h1>Gráficas</h1>
            </Link>
          </div>
        </div>

        <FeatureMain {...this.props.match} />
      </div>
    );
  }
}

const mapStateToProps = ({
  empresasReducer,
  politicasReducer,
  activosReducer
}) => {
  return { empresasReducer, politicasReducer, activosReducer };
};

const mapDispatchToProps = {
  empresasTraerUno,
  empresasLocationChange
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEmpresa);
