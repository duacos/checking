import React from "react";
import * as empresasActions from "../actions/empresasActions";
import * as politicasActions from "../actions/politicasActions";

import { connect } from "react-redux";
import "../styles/ViewStyles.sass";

import FeatureMain from "../components/features/FeatureMain";

const { traerUno: empresasTraerUno } = empresasActions;
const { traerUna: politicasTraerUna } = politicasActions;

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

        <FeatureMain {...this.props.match} />
      </div>
    );
  }
}

const mapStateToProps = ({ empresasReducer, politicasReducer }) => {
  return { empresasReducer, politicasReducer };
};

const mapDispatchToProps = {
  empresasTraerUno,
  politicasTraerUna
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowEmpresa);
