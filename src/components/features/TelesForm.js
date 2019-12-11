import React from "react";
import * as telesActions from "../../actions/telesActions";
import { connect } from "react-redux";
import SelectForm from "../SelectForm";

const { editarTele: telesEditarTele } = telesActions;

class TelesForm extends React.Component {
  constructor(props) {
    super(props);

    const { telesReducer, empresasReducer } = this.props;

    const localReducer = telesReducer;

    if (Object.keys(localReducer.data).length > 0) {
      this.state = {
        controles: localReducer.data.controles,
        mecanismos: localReducer.data.mecanismos,
        segregacion: localReducer.data.segregacion,
        politicas: localReducer.data.politicas,
        intercambio: localReducer.data.intercambio,
        mensajeria: localReducer.data.mensajeria,
        confidencialidad: localReducer.data.confidencialidad
      };
    } else if (empresasReducer.data.tele) {
      this.state = {
        controles: empresasReducer.data.tele.controles,
        mecanismos: empresasReducer.data.tele.mecanismos,
        segregacion: empresasReducer.data.tele.segregacion,
        politicas: empresasReducer.data.tele.politicas,
        intercambio: empresasReducer.data.tele.intercambio,
        mensajeria: empresasReducer.data.tele.mensajeria,
        confidencialidad: empresasReducer.data.tele.confidencialidad
      };
    } else {
      this.state = {
        controles: "No realizado",
        mecanismos: "No realizado",
        segregacion: "No realizado",
        politicas: "No realizado",
        intercambio: "No realizado",
        mensajeria: "No realizado",
        confidencialidad: "No realizado"
      };
    }
  }

  sendChanges() {
    const { telesEditarTele } = this.props;

    telesEditarTele(this.props.empresa_id, {
      controles: this.state.controles,
      mecanismos: this.state.mecanismos,
      segregacion: this.state.segregacion,
      politicas: this.state.politicas,
      intercambio: this.state.intercambio,
      mensajeria: this.state.mensajeria,
      confidencialidad: this.state.confidencialidad
    });
  }

  render() {
    const {
      controles,
      mecanismos,
      segregacion,
      politicas,
      intercambio,
      mensajeria,
      confidencialidad
    } = this.state;

    return (
      <React.Fragment>
        <div className="item-info">
          Controles de red
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
          Mecanismos de seguridad asociados a servicios en red
          <SelectForm
            value={mecanismos}
            handleSelect={e => {
              this.setState({
                mecanismos: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          Segregación de redes
          <SelectForm
            value={segregacion}
            handleSelect={e => {
              this.setState({
                segregacion: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          Políticas y procedimientos de intercambio de información
          <SelectForm
            value={politicas}
            handleSelect={e => {
              this.setState({
                politicas: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          Acuerdos de intercambio
          <SelectForm
            value={intercambio}
            handleSelect={e => {
              this.setState({
                intercambio: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          Mensajería electrónica
          <SelectForm
            value={mensajeria}
            handleSelect={e => {
              this.setState({
                mensajeria: e.target.value
              });
            }}
          />
        </div>

        <div className="item-info">
          Acuerdos de confidencialidad y secreto
          <SelectForm
            value={confidencialidad}
            handleSelect={e => {
              this.setState({
                confidencialidad: e.target.value
              });
            }}
          />
        </div>

        <button onClick={this.sendChanges.bind(this)}>Actualizar</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ empresasReducer, telesReducer }) => {
  return { empresasReducer, telesReducer };
};

const mapDispatchToProps = {
  telesEditarTele
};

export default connect(mapStateToProps, mapDispatchToProps)(TelesForm);
