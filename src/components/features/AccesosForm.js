import React from "react";

import * as accesosActions from "../../actions/accesosActions";
import { connect } from "react-redux";

import SelectForm from "../SelectForm";

const { editarAcceso: accesosEditarAcceso } = accesosActions;

class AccesosForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      politicaControl: "No realizado",
      controlAcceso: "No realizado",
      gestionAltasBajas: "No realizado",
      gestionDerechosUsuarios: "No realizado",
      gestionDerechosEspeciales: "No realizado",
      revisionDerechos: "No realizado",
      retirada: "No realizado",
      restriccion: "No realizado",
      procedimientos: "No realizado",
      gestionPassword: "No realizado",
      uso: "No realizado",
      accesoCodigo: "No realizado"
    };
  }

  politicaControlSelect(e) {
    this.setState({ politicaControl: e.target.value });
  }

  controlAccesoSelect(e) {
    this.setState({ controlAcceso: e.target.value });
  }

  gestionAltasBajasSelect(e) {
    this.setState({ gestionAltasBajas: e.target.value });
  }

  gestionDerechosUsuariosSelect(e) {
    this.setState({ gestionDerechosUsuarios: e.target.value });
  }

  gestionDerechosEspecialesSelect(e) {
    this.setState({ gestionDerechosEspeciales: e.target.value });
  }

  revisionDerechosSelect(e) {
    this.setState({ revisionDerechos: e.target.value });
  }

  retiradaSelect(e) {
    this.setState({ retirada: e.target.value });
  }

  restriccionSelect(e) {
    this.setState({ restriccion: e.target.value });
  }

  procedimientosSelect(e) {
    this.setState({ procedimientos: e.target.value });
  }

  gestionPasswordSelect(e) {
    this.setState({ gestionPassword: e.target.value });
  }

  usoSelect(e) {
    this.setState({ uso: e.target.value });
  }

  accesoCodigoSelect(e) {
    this.setState({ accesoCodigo: e.target.value });
  }

  sendChanges() {
    const {
      politicaControl,
      controlAcceso,
      gestionAltasBajas,
      gestionDerechosUsuarios,
      gestionDerechosEspeciales,
      revisionDerechos,
      retirada,
      restriccion,
      procedimientos,
      gestionPassword,
      uso,
      accesoCodigo
    } = this.state;

    this.props.accesosEditarAcceso(this.props.empresa_id, {
      politicaControl,
      controlAcceso,
      gestionAltasBajas,
      gestionDerechosUsuarios,
      gestionDerechosEspeciales,
      revisionDerechos,
      retirada,
      restriccion,
      procedimientos,
      gestionPassword,
      uso,
      accesoCodigo
    });
  }

  render() {
    const {
      politicaControl,
      controlAcceso,
      gestionAltasBajas,
      gestionDerechosUsuarios,
      gestionDerechosEspeciales,
      revisionDerechos,
      retirada,
      restriccion,
      procedimientos,
      gestionPassword,
      uso,
      accesoCodigo
    } = this.props.accesosReducer.data;

    return (
      <React.Fragment>
        <div className="item-info">
          Política de control de accesos
          <SelectForm
            value={politicaControl}
            handleSelect={this.politicaControlSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          Control de acceso a las redes y servicios asociados
          <SelectForm
            value={controlAcceso}
            handleSelect={this.controlAccesoSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          Gestión de altas/bajas en el registro de usuarios
          <SelectForm
            value={gestionAltasBajas}
            handleSelect={this.gestionAltasBajasSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          Gestión de los derechos de acceso asignados a usuarios
          <SelectForm
            value={gestionDerechosUsuarios}
            handleSelect={this.gestionDerechosUsuariosSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          Gestión de los derechos de acceso con privilegios especiales
          <SelectForm
            value={gestionDerechosEspeciales}
            handleSelect={this.gestionDerechosEspecialesSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          Revisión de los derechos de acceso de los usuarios
          <SelectForm
            value={revisionDerechos}
            handleSelect={this.revisionDerechosSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          Retirada o adaptación de los derechos de acceso
          <SelectForm
            value={retirada}
            handleSelect={this.retiradaSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          Restricción del acceso a la información
          <SelectForm
            value={restriccion}
            handleSelect={this.restriccionSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          Procedimientos seguros de inicio de sesión
          <SelectForm
            value={procedimientos}
            handleSelect={this.procedimientosSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          Gestión de contraseñas de usuario
          <SelectForm
            value={gestionPassword}
            handleSelect={this.gestionPasswordSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          Uso de herramientas de administración de sistemas
          <SelectForm value={uso} handleSelect={this.usoSelect.bind(this)} />
        </div>

        <div className="item-info">
          Control de acceso al código fuente de los programas
          <SelectForm
            value={accesoCodigo}
            handleSelect={this.accesoCodigoSelect.bind(this)}
          />
        </div>

        <button onClick={this.sendChanges.bind(this)}>Actualizar</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ accesosReducer }) => {
  return { accesosReducer };
};

const mapDispatchToProps = {
  accesosEditarAcceso
};

export default connect(mapStateToProps, mapDispatchToProps)(AccesosForm);
