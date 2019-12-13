import React from "react";
import * as empresasActions from "../actions/empresasActions";

import { connect } from "react-redux";
import "../styles/ViewStyles.sass";
import "../styles/ViewDataStyles.sass";

import Chart1 from "../components/Chart1";
import Chart2 from "../components/Chart2";

const {
  traerUno: empresasTraerUno,
  locationChange: empresasLocationChange
} = empresasActions;

class ShowEmpresa extends React.Component {
  componentDidMount() {
    this.props.empresasTraerUno(this.props.match.params.empresa_id);
    this.props.empresasLocationChange(this.props.match.params.empresa_id);
  }

  asNumber(attr) {
    if (attr === "No realizado") return 0;
    else if (attr === "Realizado informalmente") return 20;
    else if (attr === "Planificado") return 40;
    else if (attr === "Bien definido") return 60;
    else if (attr === "Cuantitativamente controlado") return 80;
    else if (attr === "Mejora continua") return 100;
    else if (attr === null) return 0;
  }

  promedio() {
    let suma = 0;

    Array.from(arguments).forEach(current => {
      suma += typeof current === "string" ? this.asNumber(current) : current;
    });

    return Math.round(suma / arguments.length);
  }

  render() {
    const { empresasReducer } = this.props;

    const { data } = this.props.empresasReducer;
    const { loading } = this.props.empresasReducer;

    if (loading === true) {
      return "loading...";
    }

    return (
      <div className="content">
        <div className="view-title">
          <h1>{data.name}</h1>
          <h3>{data.description}</h3>
        </div>

        <Chart1
          promedio={this.promedio.bind(this)}
          empresasReducer={empresasReducer}
        />

        <Chart2
          promedio={this.promedio.bind(this)}
          empresasReducer={empresasReducer}
        />
      </div>
    );
  }
}

const mapStateToProps = ({
  empresasReducer,
  politicasReducer,
  activosReducer
}) => {
  return { empresasReducer, politicasReducer, activosReducer };
};

const mapDispatchToProps = {
  empresasTraerUno,
  empresasLocationChange
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowEmpresa);
