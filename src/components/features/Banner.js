import React from "react";
import PoliticasForm from "./PoliticasForm";
import ActivosForm from "./ActivosForm";
import AccesosForm from "./AccesosForm";
import AmbientesForm from "./AmbientesForm";
import OperativasForm from "./OperativasForm";
import TelesForm from "./TelesForm";
import DesarrollosForm from "./DesarrollosForm";

import { connect } from "react-redux";

class Banner extends React.Component {
  toggleFeatures() {
    if (this.props.empresasReducer.visibility.politicaVisible === true) {
      return <PoliticasForm empresa_id={this.props.empresa_id} />;
    } else if (this.props.empresasReducer.visibility.activoVisible === true) {
      return <ActivosForm empresa_id={this.props.empresa_id} />;
    } else if (this.props.empresasReducer.visibility.accesoVisible === true) {
      return <AccesosForm empresa_id={this.props.empresa_id} />;
    } else if (this.props.empresasReducer.visibility.ambienteVisible === true) {
      return <AmbientesForm empresa_id={this.props.empresa_id} />;
    } else if (
      this.props.empresasReducer.visibility.operativaVisible === true
    ) {
      return <OperativasForm empresa_id={this.props.empresa_id} />;
    } else if (this.props.empresasReducer.visibility.teleVisible === true) {
      return <TelesForm empresa_id={this.props.empresa_id} />;
    } else if (
      this.props.empresasReducer.visibility.desarrolloVisible === true
    ) {
      return <DesarrollosForm empresa_id={this.props.empresa_id} />;
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="feature-banner">
        <div className="feature-banner-box">{this.toggleFeatures()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ empresasReducer }) => {
  return { empresasReducer };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
