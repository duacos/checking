import React from "react";
import * as ambientesActions from "../../actions/ambientesActions";
import { connect } from "react-redux";
import SelectForm from "../SelectForm";

const { editarAmbiente: ambientesEditarAmbiente } = ambientesActions;

class AmbientesForm extends React.Component {
  constructor(props) {
    super(props);

    const { ambientesReducer, empresasReducer } = this.props;

    const localReducer = ambientesReducer;

    if (Object.keys(localReducer.data).length > 0) {
      this.state = {
        perimetros: localReducer.data.perimetros,
        controles: localReducer.data.controles,
        seguridad: localReducer.data.seguridad,
        proteccion: localReducer.data.proteccion,
        areasSeguras: localReducer.data.areasSeguras,
        accesoPublico: localReducer.data.accesoPublico,
        emplazamiento: localReducer.data.emplazamiento,
        instalaciones: localReducer.data.instalaciones,
        cableado: localReducer.data.cableado,
        mantenimiento: localReducer.data.mantenimiento,
        salidaActivos: localReducer.data.salidaActivos,
        seguridadEquipos: localReducer.data.seguridadEquipos,
        reutilizacion: localReducer.data.reutilizacion,
        equipo: localReducer.data.equipo,
        politica: localReducer.data.politica
      };
    } else if (empresasReducer.data.ambiente) {
      this.state = {
        perimetros: empresasReducer.data.ambiente.perimetros,
        controles: empresasReducer.data.ambiente.controles,
        seguridad: empresasReducer.data.ambiente.seguridad,
        proteccion: empresasReducer.data.ambiente.proteccion,
        areasSeguras: empresasReducer.data.ambiente.areasSeguras,
        accesoPublico: empresasReducer.data.ambiente.accesoPublico,
        emplazamiento: empresasReducer.data.ambiente.emplazamiento,
        instalaciones: empresasReducer.data.ambiente.instalaciones,
        cableado: empresasReducer.data.ambiente.cableado,
        mantenimiento: empresasReducer.data.ambiente.mantenimiento,
        salidaActivos: empresasReducer.data.ambiente.salidaActivos,
        seguridadEquipos: empresasReducer.data.ambiente.seguridadEquipos,
        reutilizacion: empresasReducer.data.ambiente.reutilizacion,
        equipo: empresasReducer.data.ambiente.equipo,
        politica: empresasReducer.data.ambiente.politica
      };
    } else {
      console.log("Excetuing if with default value ");
      this.state = {
        perimetros: "No realizado",
        controles: "No realizado",
        seguridad: "No realizado",
        proteccion: "No realizado",
        areasSeguras: "No realizado",
        accesoPublico: "No realizado",
        emplazamiento: "No realizado",
        instalaciones: "No realizado",
        cableado: "No realizado",
        mantenimiento: "No realizado",
        salidaActivos: "No realizado",
        seguridadEquipos: "No realizado",
        reutilizacion: "No realizado",
        equipo: "No realizado",
        politica: "No realizado"
      };
    }
  }

  sendChanges() {
    const { ambientesEditarAmbiente } = this.props;

    ambientesEditarAmbiente(this.props.empresa_id, {
      perimetros: this.state.perimetros,
      controles: this.state.controles,
      seguridad: this.state.seguridad,
      proteccion: this.state.proteccion,
      areasSeguras: this.state.areasSeguras,
      accesoPublico: this.state.accesoPublico,
      emplazamiento: this.state.emplazamiento,
      instalaciones: this.state.instalaciones,
      cableado: this.state.cableado,
      mantenimiento: this.state.mantenimiento,
      salidaActivos: this.state.salidaActivos,
      seguridadEquipos: this.state.seguridadEquipos,
      reutilizacion: this.state.reutilizacion,
      equipo: this.state.equipo,
      politica: this.state.politica
    });
  }

  render() {
    const {
      perimetros,
      controles,
      seguridad,
      proteccion,
      areasSeguras,
      accesoPublico,
      emplazamiento,
      instalaciones,
      cableado,
      mantenimiento,
      salidaActivos,
      seguridadEquipos,
      reutilizacion,
      equipo,
      politica
    } = this.state;

    return (
      <React.Fragment>
        <div className="item-info">
          <p>Perímetro de seguridad física</p>
          <SelectForm
            value={perimetros}
            handleSelect={e => {
              this.setState({
                perimetros: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          <p>Controles físicos de entrada</p>
          <SelectForm
            value={controles}
            handleSelect={e => {
              this.setState({
                controles: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          <p>Seguridad de oficinas, despachos y recursos</p>
          <SelectForm
            value={seguridad}
            handleSelect={e => {
              this.setState({
                seguridad: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          <p>Protección contra las amenazas externas y ambientales</p>
          <SelectForm
            value={proteccion}
            handleSelect={e => {
              this.setState({
                proteccion: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          <p>El trabajo en áreas seguras</p>
          <SelectForm
            value={areasSeguras}
            handleSelect={e => {
              this.setState({
                areasSeguras: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          <p>Áreas de acceso público, carga y descarga</p>
          <SelectForm
            value={accesoPublico}
            handleSelect={e => {
              this.setState({
                accesoPublico: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          <p>Emplazamiento y protección de equipos</p>
          <SelectForm
            value={emplazamiento}
            handleSelect={e => {
              this.setState({
                emplazamiento: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          <p>Instalaciones de suministro</p>
          <SelectForm
            value={instalaciones}
            handleSelect={e => {
              this.setState({
                instalaciones: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          <p>Seguridad del cableado</p>
          <SelectForm
            value={cableado}
            handleSelect={e => {
              this.setState({
                cableado: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          <p>Mantenimiento de los equipos</p>
          <SelectForm
            value={mantenimiento}
            handleSelect={e => {
              this.setState({
                mantenimiento: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          <p>Salida de activos fuera de las dependencias de la empresa</p>
          <SelectForm
            value={salidaActivos}
            handleSelect={e => {
              this.setState({
                salidaActivos: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          <p>Seguridad de los equipos y activos fuera de las instalaciones</p>
          <SelectForm
            value={seguridadEquipos}
            handleSelect={e => {
              this.setState({
                seguridadEquipos: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          <p>
            Reutilización o retirada segura de dispositivos de almacenamiento
          </p>
          <SelectForm
            value={reutilizacion}
            handleSelect={e => {
              this.setState({
                reutilizacion: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          <p>Equipo informático de usuario desatendido</p>
          <SelectForm
            value={equipo}
            handleSelect={e => {
              this.setState({
                equipo: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          <p>Política de puesto de trabajo despejado y bloqueo de pantalla</p>
          <SelectForm
            value={politica}
            handleSelect={e => {
              this.setState({
                politica: e.target.value
              });
            }}
          />
        </div>

        <button onClick={this.sendChanges.bind(this)}>Actualizar</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ empresasReducer, ambientesReducer }) => {
  return { empresasReducer, ambientesReducer };
};

const mapDispatchToProps = {
  ambientesEditarAmbiente
};

export default connect(mapStateToProps, mapDispatchToProps)(AmbientesForm);
