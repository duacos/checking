import React from "react";
import FeatureItem from "./FeatureItem";
import { ReactComponent as SegOp } from "../../assets/images/001-policy.svg";
import { ReactComponent as Execution } from "../../assets/images/002-execution.svg";
import { ReactComponent as Key } from "../../assets/images/003-key.svg";
import { ReactComponent as Enviromental } from "../../assets/images/enviromental.svg";
import { ReactComponent as ServerImg } from "../../assets/images/serverimg.svg";
import { ReactComponent as TowerImg } from "../../assets/images/tower.svg";
import { ReactComponent as MentenimientoImg } from "../../assets/images/mantenimiento.svg";
import PoliticasForm from "./PoliticasForm";
import ActivosForm from "./ActivosForm";

import * as politicasActions from "../../actions/politicasActions";
import * as activosActions from "../../actions/activosActions";
import { connect } from "react-redux";

const {
  traerUna: politicasTraerUna,
  toggleVisible: politicasToggleVisible
} = politicasActions;

const {
  traerUno: activosTraerUno,
  toggleVisible: activosToggleVisible
} = activosActions;

class FeatureMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seguridad_info: "No realizado",
      revision_string: "No realizado"
    };
  }

  componentDidMount() {
    const { politicasReducer, params, politicasTraerUna } = this.props;
    const { activosReducer, activosTraerUno } = this.props;

    if (politicasReducer.data.length && activosReducer.data.length) {
      politicasTraerUna(params.empresa_id);
      activosTraerUno(params.empresa_id);
    }
  }

  togglePolitica() {
    this.props.politicasToggleVisible(this.props.politicasReducer.visible);
  }

  toggleActivo() {
    this.props.activosToggleVisible(this.props.activosReducer.visible);
  }

  showPolitica() {
    const { politicasReducer, activosReducer } = this.props;
    if (politicasReducer.visible === true && activosReducer.visible === false) {
      return (
        <PoliticasForm
          {...this.props}
          politica_id={this.props.params.politica_id}
          empresa_id={this.props.params.empresa_id}
        />
      );
    } else {
      return "";
    }
  }

  showActivo() {
    const { politicasReducer, activosReducer } = this.props;
    if (politicasReducer.visible === false && activosReducer.visible === true) {
      return <ActivosForm empresa_id={this.props.params.empresa_id} />;
    } else {
      return "";
    }
  }

  render() {
    console.log(this.props);

    return (
      <React.Fragment>
        <div className="content">
          <div className="feature-section">
            <div className="feature-list">
              <FeatureItem
                text="Políticas de seguridad"
                ImgComponent={SegOp}
                handleClick={this.togglePolitica.bind(this)}
              />

              <FeatureItem
                text="Gestión de Activos"
                ImgComponent={Execution}
                handleClick={this.toggleActivo.bind(this)}
              />

              <FeatureItem text="Control de acceso" ImgComponent={Key} />
              <FeatureItem
                text="Seguridad física y ambiental"
                ImgComponent={Enviromental}
              />
              <FeatureItem
                text="Seguridad en la operativa"
                ImgComponent={ServerImg}
              />
              <FeatureItem
                text="Seguridad en las telecomunicaciones"
                ImgComponent={TowerImg}
              />
              <FeatureItem
                text="Adquisición, desarrollo y mantenimiento"
                ImgComponent={MentenimientoImg}
              />
            </div>

            <div className="feature-banner">
              <div className="feature-banner-box">
                {this.showPolitica()}
                {this.showActivo()}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ politicasReducer, activosReducer }) => {
  return { politicasReducer, activosReducer };
};

const mapDispatchToProps = {
  politicasTraerUna,
  politicasToggleVisible,
  activosTraerUno,
  activosToggleVisible
};

export default connect(mapStateToProps, mapDispatchToProps)(FeatureMain);
