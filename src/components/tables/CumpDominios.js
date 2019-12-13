import React from "react";

class CumpDominios extends React.Component {
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
          <tr>
            <th>Políticas de seguridad</th>
            <td>{this.props.defineDirectrices()}%</td>
          </tr>
          <tr>
            <th>Gestión de activos</th>
            <td>{this.props.responsabilidad()}%</td>
          </tr>
          <tr>
            <th>Control de acceso</th>
            <td>{this.props.controlAcceso()}%</td>
          </tr>

          <tr>
            <th>Seguridad física y ambiental</th>
            <td>{this.props.ambiental()}%</td>
          </tr>

          <tr>
            <th>Seguridad en la operativa</th>
            <td>{this.props.defineOperativa()}%</td>
          </tr>

          <tr>
            <th>Seguridad en las telecomunicaciones</th>
            <td>{this.props.defineTele()}%</td>
          </tr>

          <tr>
            <th>
              Adquisición, desarrollo y mantenimiento de los sistemas de
              información
            </th>
            <td>{this.props.defineDesarrollo()}%</td>
          </tr>

          <tr>
            <th>Cumplimiento general</th>
            <td>{this.props.cumplimientoGeneral()}%</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default CumpDominios;
