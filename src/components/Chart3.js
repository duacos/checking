import React from "react";

import CanvasJSReact from "../lib/canvasjs.react";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart3 extends React.Component {
  constructor(props) {
    super(props);
    this.contadorNorealizado = 0;
  }

  ifExists(reducer, value) {
    let acum = 0;
    if (this.props.empresasReducer.data[reducer]) {
      Object.keys(this.props.empresasReducer.data[reducer]).forEach(key => {
        if (
          this.props.empresasReducer.data[reducer][key] === value ||
          this.props.empresasReducer.data[reducer][key] === null
        ) {
          acum++;
        }
      });
    } else {
      if (reducer === "politica" && value === "No realizado") {
        return 2;
      }

      if (reducer === "activo" && value === "No realizado") {
        return 9;
      }

      if (reducer === "acceso" && value === "No realizado") {
        return 12;
      }

      if (reducer === "ambiente" && value === "No realizado") {
        return 15;
      }

      if (reducer === "operativa" && value === "No realizado") {
        return 2;
      }

      if (reducer === "tele" && value === "No realizado") {
        return 7;
      }

      if (reducer === "desarrollo" && value === "No realizado") {
        return 4;
      }
    }

    return acum;
  }

  contarNoRealizado() {
    const value = "No realizado";
    const suma =
      this.ifExists("politica", value) +
      this.ifExists("activo", value) +
      this.ifExists("acceso", value) +
      this.ifExists("ambiente", value) +
      this.ifExists("operativa", value) +
      this.ifExists("tele", value) +
      this.ifExists("desarrollo", value);

    return suma;
  }

  contarRealizadoInformalmente() {
    const value = "Realizado informalmente";
    const suma =
      this.ifExists("politica", value) +
      this.ifExists("activo", value) +
      this.ifExists("acceso", value) +
      this.ifExists("ambiente", value) +
      this.ifExists("operativa", value) +
      this.ifExists("tele", value) +
      this.ifExists("desarrollo", value);
    return suma;
  }

  contarPlanificado() {
    const value = "Planificado";
    const suma =
      this.ifExists("politica", value) +
      this.ifExists("activo", value) +
      this.ifExists("acceso", value) +
      this.ifExists("ambiente", value) +
      this.ifExists("operativa", value) +
      this.ifExists("tele", value) +
      this.ifExists("desarrollo", value);
    return suma;
  }

  contarBienDefinido() {
    const value = "Bien definido";
    const suma =
      this.ifExists("politica", value) +
      this.ifExists("activo", value) +
      this.ifExists("acceso", value) +
      this.ifExists("ambiente", value) +
      this.ifExists("operativa", value) +
      this.ifExists("tele", value) +
      this.ifExists("desarrollo", value);
    return suma;
  }

  contarCuantitativamenteControlado() {
    const value = "Cuantitativamente controlado";
    const suma =
      this.ifExists("politica", value) +
      this.ifExists("activo", value) +
      this.ifExists("acceso", value) +
      this.ifExists("ambiente", value) +
      this.ifExists("operativa", value) +
      this.ifExists("tele", value) +
      this.ifExists("desarrollo", value);
    return suma;
  }

  contarMejoraContinua() {
    const value = "Mejora Continua";
    const suma =
      this.ifExists("politica", value) +
      this.ifExists("activo", value) +
      this.ifExists("acceso", value) +
      this.ifExists("ambiente", value) +
      this.ifExists("operativa", value) +
      this.ifExists("tele", value) +
      this.ifExists("desarrollo", value);
    return suma;
  }

  render() {
    this.options = {
      animationEnabled: true,
      exportEnabled: true,
      height: 300,
      animationDuration: 5000,
      title: {
        text: "Madurez de los controles"
      },
      data: [
        {
          type: "pie",
          startAngle: 25,
          toolTipContent: "<b>{label}</b>: {y}%",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}%",
          dataPoints: [
            {
              y: this.contarNoRealizado(),
              label: "No realizado"
            },
            {
              y: this.contarRealizadoInformalmente(),
              label: "Realizado informalmente"
            },
            {
              y: this.contarPlanificado(),
              label: "Planificado"
            },
            {
              y: this.contarBienDefinido(),
              label: "Bien definido"
            },
            {
              y: this.contarCuantitativamenteControlado(),
              label: "Cuantitativamente controlado"
            },
            {
              y: this.contarMejoraContinua(),
              label: "Mejora continua"
            }
          ]
        }
      ]
    };
    return (
      <div className="show-banner-2">
        <CanvasJSChart options={this.options} />
      </div>
    );
  }
}

export default Chart3;
