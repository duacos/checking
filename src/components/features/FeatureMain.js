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

const FeatureMain = props => {
  const toggle = reducer => {
    props.empresasToggleFeature(reducer);
  };

  return (
    <div className="content">
      <div className="feature-section">
        <div className="feature-list">
          <FeatureItem
            text="Políticas de seguridad"
            ImgComponent={SegOp}
            handleClick={toggle.bind(this, "politicaVisible")}
          />
          <FeatureItem
            text="Gestión de Activos"
            ImgComponent={Execution}
            handleClick={toggle.bind(this, "activoVisible")}
          />
          <FeatureItem
            text="Control de acceso"
            ImgComponent={Key}
            handleClick={toggle.bind(this, "accesoVisible")}
          />
          <FeatureItem
            text="Seguridad física y ambiental"
            ImgComponent={Enviromental}
            handleClick={toggle.bind(this, "ambienteVisible")}
          />
          <FeatureItem
            text="Seguridad en la operativa"
            ImgComponent={ServerImg}
            handleClick={toggle.bind(this, "operativaVisible")}
          />

          <FeatureItem
            text="Seguridad en las telecomunicaciones"
            ImgComponent={TowerImg}
            handleClick={toggle.bind(this, "teleVisible")}
          />

          <FeatureItem
            text="Adquisición, desarrollo y mantenimiento"
            ImgComponent={MentenimientoImg}
            handleClick={toggle.bind(this, "desarrolloVisible")}
          />
        </div>

        <Banner empresa_id={props.params.empresa_id} />
      </div>
    </div>
  );
};

const mapStateToProps = ({}) => {
  return {};
};

const mapDispatchToProps = {
  empresasToggleFeature
};

export default connect(mapStateToProps, mapDispatchToProps)(FeatureMain);
