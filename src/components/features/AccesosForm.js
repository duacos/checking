import React from "react";

import * as accesosActions from "../../actions/accesosActions";
import { connect } from "react-redux";

import SelectForm from "../SelectForm";

const { editarAcceso: accesosEditarAcceso } = accesosActions;

class AccesosForm extends React.Component {
  constructor(props) {
    super(props);

    const { accesosReducer, empresasReducer } = this.props;

    const localReducer = accesosReducer;

    if (Object.keys(localReducer.data).length > 0) {
      this.state = {
        politicaControl: localReducer.data.politicaControl,
        controlAcceso: localReducer.data.controlAcceso,
        gestionAltasBajas: localReducer.data.gestionAltasBajas,
        gestionDerechosUsuarios: localReducer.data.gestionDerechosUsuarios,
        gestionDerechosEspeciales: localReducer.data.gestionDerechosEspeciales,
        revisionDerechos: localReducer.data.revisionDerechos,
        retirada: localReducer.data.retirada,
        restriccion: localReducer.data.restriccion,
        procedimientos: localReducer.data.procedimientos,
        gestionPassword: localReducer.data.gestionPassword,
        uso: localReducer.data.uso,
        accesoCodigo: localReducer.data.accesoCodigo
      };
    } else if (empresasReducer.data.acceso) {
      this.state = {
        politicaControl: empresasReducer.data.acceso.politicaControl,
        controlAcceso: empresasReducer.data.acceso.controlAcceso,
        gestionAltasBajas: empresasReducer.data.acceso.gestionAltasBajas,
        gestionDerechosUsuarios:
          empresasReducer.data.acceso.gestionDerechosUsuarios,
        gestionDerechosEspeciales:
          empresasReducer.data.acceso.gestionDerechosEspeciales,
        revisionDerechos: empresasReducer.data.acceso.revisionDerechos,
        retirada: empresasReducer.data.acceso.retirada,
        restriccion: empresasReducer.data.acceso.restriccion,
        procedimientos: empresasReducer.data.acceso.procedimientos,
        gestionPassword: empresasReducer.data.acceso.gestionPassword,
        uso: empresasReducer.data.acceso.uso,
        accesoCodigo: empresasReducer.data.acceso.accesoCodigo
      };
    } else {
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
    console.log(this.props);
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

    return (
      <React.Fragment>
        <div className="item-info">
          <p>Política de control de accesos</p>
          <SelectForm
            value={politicaControl}
            handleSelect={this.politicaControlSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          <p>Control de acceso a las redes y servicios asociados</p>
          <SelectForm
            value={controlAcceso}
            handleSelect={this.controlAccesoSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          <p>Gestión de altas/bajas en el registro de usuarios</p>
          <SelectForm
            value={gestionAltasBajas}
            handleSelect={this.gestionAltasBajasSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          <p>Gestión de los derechos de acceso asignados a usuarios</p>
          <SelectForm
            value={gestionDerechosUsuarios}
            handleSelect={this.gestionDerechosUsuariosSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          <p>Gestión de los derechos de acceso con privilegios especiales</p>
          <SelectForm
            value={gestionDerechosEspeciales}
            handleSelect={this.gestionDerechosEspecialesSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          <p>Revisión de los derechos de acceso de los usuarios</p>
          <SelectForm
            value={revisionDerechos}
            handleSelect={this.revisionDerechosSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          <p>Retirada o adaptación de los derechos de acceso</p>
          <SelectForm
            value={retirada}
            handleSelect={this.retiradaSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          <p>Restricción del acceso a la información</p>
          <SelectForm
            value={restriccion}
            handleSelect={this.restriccionSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          <p>Procedimientos seguros de inicio de sesión</p>
          <SelectForm
            value={procedimientos}
            handleSelect={this.procedimientosSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          <p>Gestión de contraseñas de usuario</p>
          <SelectForm
            value={gestionPassword}
            handleSelect={this.gestionPasswordSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          <p>Uso de herramientas de administración de sistemas</p>
          <SelectForm value={uso} handleSelect={this.usoSelect.bind(this)} />
        </div>

        <div className="item-info">
          <p>Control de acceso al código fuente de los programas</p>
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

const mapStateToProps = ({ empresasReducer, accesosReducer }) => {
  return { empresasReducer, accesosReducer };
};

const mapDispatchToProps = {
  accesosEditarAcceso
};

export default connect(mapStateToProps, mapDispatchToProps)(AccesosForm);
