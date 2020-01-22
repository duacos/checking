import React from "react";

import * as activosActions from "../../actions/activosActions";
import { connect } from "react-redux";

import SelectForm from "../SelectForm";

const { editarActivo: activosEditarActivo } = activosActions;

class ActivosForm extends React.Component {
  constructor(props) {
    super(props);

    const { activosReducer, empresasReducer } = this.props;

    if (Object.keys(activosReducer.data).length > 0) {
      this.state = {
        inventario: activosReducer.data.inventario,
        propiedad: activosReducer.data.propiedad,
        uso: activosReducer.data.uso,
        devolucion: activosReducer.data.devolucion,
        directrices: activosReducer.data.directrices,
        etiquetado: activosReducer.data.etiquetado,
        gestion: activosReducer.data.gestion,
        eliminacion: activosReducer.data.eliminacion,
        soportes: activosReducer.data.soportes
      };
    } else if (empresasReducer.data.activo) {
      this.state = {
        inventario: empresasReducer.data.activo.inventario,
        propiedad: empresasReducer.data.activo.propiedad,
        uso: empresasReducer.data.activo.uso,
        devolucion: empresasReducer.data.activo.devolucion,
        directrices: empresasReducer.data.activo.directrices,
        etiquetado: empresasReducer.data.activo.etiquetado,
        gestion: empresasReducer.data.activo.gestion,
        eliminacion: empresasReducer.data.activo.eliminacion,
        soportes: empresasReducer.data.activo.soportes
      };
    } else {
      this.state = {
        inventario: "No realizado",
        propiedad: "No realizado",
        uso: "No realizado",
        devolucion: "No realizado",
        directrices: "No realizado",
        etiquetado: "No realizado",
        gestion: "No realizado",
        eliminacion: "No realizado",
        soportes: "No realizado"
      };
    }
  }

  inventarioSelect(e) {
    this.setState({ inventario: e.target.value });
  }

  propiedadSelect(e) {
    this.setState({ propiedad: e.target.value });
  }

  usoSelect(e) {
    this.setState({ uso: e.target.value });
  }

  devolucionSelect(e) {
    this.setState({ devolucion: e.target.value });
  }

  directricesSelect(e) {
    this.setState({ directrices: e.target.value });
  }

  etiquetadoSelect(e) {
    this.setState({ etiquetado: e.target.value });
  }

  gestionSelect(e) {
    this.setState({ gestion: e.target.value });
  }

  eliminacionSelect(e) {
    this.setState({ eliminacion: e.target.value });
  }

  seguridadInfoSelect(e) {
    this.setState({ seguridad: e.target.value });
  }

  soportesSelect(e) {
    this.setState({ soportes: e.target.value });
  }

  sendChanges() {
    this.props.activosEditarActivo(this.props.empresa_id, {
      inventario: this.state.inventario,
      propiedad: this.state.propiedad,
      uso: this.state.uso,
      devolucion: this.state.devolucion,
      directrices: this.state.directrices,
      etiquetado: this.state.etiquetado,
      gestion: this.state.gestion,
      eliminacion: this.state.eliminacion,
      soportes: this.state.soportes
    });
  }

  render() {
    const {
      inventario,
      propiedad,
      uso,
      devolucion,
      directrices,
      etiquetado,
      gestion,
      eliminacion,
      soportes
    } = this.state;

    return (
      <React.Fragment>
        <div className="item-info">
          <p>Inventario de activos</p>
          <SelectForm
            value={inventario}
            handleSelect={this.inventarioSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          <p>Propiedad de los activos</p>
          <SelectForm
            value={propiedad}
            handleSelect={this.propiedadSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          <p>Uso aceptable de los activos</p>
          <SelectForm value={uso} handleSelect={this.usoSelect.bind(this)} />
        </div>

        <div className="item-info">
          <p>Devolución de los activos</p>
          <SelectForm
            value={devolucion}
            handleSelect={this.devolucionSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          <p>Directrices de clasificación</p>
          <SelectForm
            value={directrices}
            handleSelect={this.directricesSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          <p>Etiquetado y manipulado de la información</p>
          <SelectForm
            value={etiquetado}
            handleSelect={this.etiquetadoSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          <p>Gestión de soportes extraíbles</p>
          <SelectForm
            value={gestion}
            handleSelect={this.gestionSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          <p>Eliminación de soportes</p>
          <SelectForm
            value={eliminacion}
            handleSelect={this.eliminacionSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          <p>Soportes físicos en tránsito</p>
          <SelectForm
            value={soportes}
            handleSelect={this.soportesSelect.bind(this)}
          />
        </div>

        <button onClick={this.sendChanges.bind(this)}>Actualizar</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ empresasReducer, activosReducer }) => {
  return { empresasReducer, activosReducer };
};

const mapDispatchToProps = {
  activosEditarActivo
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivosForm);
