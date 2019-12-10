import React from "react";

import * as activosActions from "../../actions/activosActions";
import { connect } from "react-redux";

import SelectForm from "../SelectForm";

const { editarActivo: activosEditarActivo } = activosActions;

class ActivosForm extends React.Component {
  constructor(props) {
    super(props);
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
    } = this.props.activosReducer.data;

    return (
      <React.Fragment>
        <div className="item-info">
          Inventario de activos
          <SelectForm
            value={inventario}
            handleSelect={this.inventarioSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          Propiedad de los activos
          <SelectForm
            value={propiedad}
            handleSelect={this.propiedadSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          Uso aceptable de los activos
          <SelectForm value={uso} handleSelect={this.usoSelect.bind(this)} />
        </div>

        <div className="item-info">
          Devolución de los activos
          <SelectForm
            value={devolucion}
            handleSelect={this.devolucionSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          Directrices de clasificación
          <SelectForm
            value={directrices}
            handleSelect={this.directricesSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          Etiquetado y manipulado de la información
          <SelectForm
            value={etiquetado}
            handleSelect={this.etiquetadoSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          Gestión de soportes extraíbles
          <SelectForm
            value={gestion}
            handleSelect={this.gestionSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          Eliminación de soportes
          <SelectForm
            value={eliminacion}
            handleSelect={this.eliminacionSelect.bind(this)}
          />
        </div>

        <div className="item-info">
          Soportes físicos en tránsito
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

const mapStateToProps = ({ activosReducer }) => {
  return { activosReducer };
};

const mapDispatchToProps = {
  activosEditarActivo
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivosForm);
