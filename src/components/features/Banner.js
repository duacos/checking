import React from "react";
import PoliticasForm from "./PoliticasForm";
import ActivosForm from "./ActivosForm";
import AccesosForm from "./AccesosForm";

import { connect } from "react-redux";

class Banner extends React.Component {
  toggleFeatures() {
    if (this.props.empresasReducer.visibility.politicaVisible === true) {
      return <PoliticasForm empresa_id={this.props.empresa_id} />;
    } else if (this.props.empresasReducer.visibility.activoVisible === true) {
      return <ActivosForm empresa_id={this.props.empresa_id} />;
    } else if (this.props.empresasReducer.visibility.accesoVisible === true) {
      return <AccesosForm empresa_id={this.props.empresa_id} />;
    } else {
      return "";
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="feature-banner">
          <div className="feature-banner-box">{this.toggleFeatures()}</div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ empresasReducer }) => {
  return { empresasReducer };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
