import React from "react";

class CumpDominios extends React.Component {
  calcularCalidad(porcentaje) {
    if (porcentaje <= 30) return "bajo";
    else if (porcentaje >= 31 && porcentaje <= 74) return "medio";
    else if (porcentaje >= 75 && porcentaje <= 100) return "alto";
  }

  applyStyles(func) {
    const calidad = this.calcularCalidad(this.props[func]());
    console.log(calidad);
    switch (calidad) {
      case "bajo":
        return { backgroundColor: "#ffeeee" };

      case "medio":
        return { backgroundColor: "#fffcca" };

      case "alto":
        return { backgroundColor: "#dbfddb" };
    }
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th colSpan="2">
              Directrices de la Dirección en seguridad de la información
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={this.applyStyles("defineDirectrices")}>
            <th>Políticas de seguridad</th>
            <td>{this.props.defineDirectrices()}%</td>
          </tr>
          <tr style={this.applyStyles("responsabilidad")}>
            <th>Gestión de activos</th>
            <td>{this.props.responsabilidad()}%</td>
          </tr>
          <tr style={this.applyStyles("controlAcceso")}>
            <th>Control de acceso</th>
            <td>{this.props.controlAcceso()}%</td>
          </tr>

          <tr style={this.applyStyles("ambiental")}>
            <th>Seguridad física y ambiental</th>
            <td>{this.props.ambiental()}%</td>
          </tr>

          <tr style={this.applyStyles("defineOperativa")}>
            <th>Seguridad en la operativa</th>
            <td>{this.props.defineOperativa()}%</td>
          </tr>

          <tr style={this.applyStyles("defineTele")}>
            <th>Seguridad en las telecomunicaciones</th>
            <td>{this.props.defineTele()}%</td>
          </tr>

          <tr style={this.applyStyles("defineDesarrollo")}>
            <th>
              Adquisición, desarrollo y mantenimiento de los sistemas de
              información
            </th>
            <td>{this.props.defineDesarrollo()}%</td>
          </tr>

          <tr style={this.applyStyles("cumplimientoGeneral")}>
            <th>
              <b>Cumplimiento general</b>
            </th>
            <td>
              <b>{this.props.cumplimientoGeneral()}%</b>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default CumpDominios;
