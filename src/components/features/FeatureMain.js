import React from "react";

import { ReactComponent as SegOp } from "../../assets/images/001-policy.svg";
import { ReactComponent as Execution } from "../../assets/images/002-execution.svg";
import { ReactComponent as Key } from "../../assets/images/003-key.svg";
import { ReactComponent as Enviromental } from "../../assets/images/enviromental.svg";
import { ReactComponent as ServerImg } from "../../assets/images/serverimg.svg";
import { ReactComponent as TowerImg } from "../../assets/images/tower.svg";
import { ReactComponent as MentenimientoImg } from "../../assets/images/mantenimiento.svg";

import FeatureItem from "./FeatureItem";

class FeatureMain extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="content">
          <div className="feature-section">
            <div className="feature-list">
              <FeatureItem text="Políticas de seguridad" ImgComponent={SegOp} />
              <FeatureItem text="Gestión de Activos" ImgComponent={Execution} />
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
              <div className="feature-banner-box">Banner</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FeatureMain;
