import React from "react";
import * as empresasActions from "../actions/empresasActions";
import { connect } from "react-redux";
import "../styles/ViewStyles.sass";

import FeatureMain from "../components/features/FeatureMain";

const { traerUno: empresasTraerUno } = empresasActions;

class ShowEmpresa extends React.Component {
  componentDidMount() {
    this.props.empresasTraerUno(this.props.match.params.empresa_id);
  }
  render() {
    const { data } = this.props.empresasReducer;
    const { loading } = this.props.empresasReducer;

    if (loading === true) {
      return "loading...";
    }

    return (
      <div className="view">
        <div className="content">
          <div className="view-title">
            <h1>{data.name}</h1>
            <h3>{data.description}</h3>
          </div>
        </div>

        <FeatureMain />
      </div>
    );
  }
}

const mapStateToProps = ({ empresasReducer }) => {
  return { empresasReducer };
};

const mapDispatchToProps = {
  empresasTraerUno
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowEmpresa);
