import React from "react";
import FeatureItem from "./FeatureItem";
import { ReactComponent as SegOp } from "../../assets/images/001-policy.svg";
import { ReactComponent as Execution } from "../../assets/images/002-execution.svg";
import { ReactComponent as Key } from "../../assets/images/003-key.svg";
import { ReactComponent as Enviromental } from "../../assets/images/enviromental.svg";
import { ReactComponent as ServerImg } from "../../assets/images/serverimg.svg";
import { ReactComponent as TowerImg } from "../../assets/images/tower.svg";
import { ReactComponent as MentenimientoImg } from "../../assets/images/mantenimiento.svg";

import * as empresasActions from "../../actions/empresasActions";
import { connect } from "react-redux";

import Banner from "./Banner";

const { toggleFeature: empresasToggleFeature } = empresasActions;

class FeatureMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerVisible: false
    };
  }

  toggle(reducer) {
    if (window.innerWidth <= 812) {
      this.toggleBanner(this);
      window.scroll(0, 0);
    }
    this.props.empresasToggleFeature(reducer);
  }

  toggleBanner() {
    this.setState({
      bannerVisible: !this.state.bannerVisible
    });
  }

  render() {
    return (
      <div className="content">
        <div className="feature-section">
          <div className="feature-list">
            <FeatureItem
              text="Políticas de seguridad"
              ImgComponent={SegOp}
              handleClick={this.toggle.bind(this, "politicaVisible")}
            />
            <FeatureItem
              text="Gestión de Activos"
              ImgComponent={Execution}
              handleClick={this.toggle.bind(this, "activoVisible")}
            />
            <FeatureItem
              text="Control de acceso"
              ImgComponent={Key}
              handleClick={this.toggle.bind(this, "accesoVisible")}
            />
            <FeatureItem
              text="Seguridad física y ambiental"
              ImgComponent={Enviromental}
              handleClick={this.toggle.bind(this, "ambienteVisible")}
            />
            <FeatureItem
              text="Seguridad en la operativa"
              ImgComponent={ServerImg}
              handleClick={this.toggle.bind(this, "operativaVisible")}
            />

            <FeatureItem
              text="Seguridad en las telecomunicaciones"
              ImgComponent={TowerImg}
              handleClick={this.toggle.bind(this, "teleVisible")}
            />

            <FeatureItem
              text="Adquisición, desarrollo y mantenimiento"
              ImgComponent={MentenimientoImg}
              handleClick={this.toggle.bind(this, "desarrolloVisible")}
            />
          </div>

          <Banner
            bannerVisible={this.state.bannerVisible}
            toggleBanner={this.toggleBanner.bind(this)}
            empresa_id={this.props.params.empresa_id}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({}) => {
  return {};
};

const mapDispatchToProps = {
  empresasToggleFeature
};

export default connect(mapStateToProps, mapDispatchToProps)(FeatureMain);
