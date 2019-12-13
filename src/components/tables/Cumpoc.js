import React from "react";

const Cumpoc = props => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">Objetivos de control</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Directrices de la Dirección en seguridad de la información</th>
          <td>{props.defineDirectrices()}%</td>
        </tr>
        <tr>
          <th>Responsabilidad sobre los Activos</th>
          <td>{props.responsabilidad()[0]}%</td>
        </tr>

        <tr>
          <th>Clasificacion de la Informacion</th>
          <td>{props.responsabilidad()[1]}%</td>
        </tr>

        <tr>
          <th>Manejo de los soportes de almacenamiento</th>
          <td>{props.responsabilidad()[2]}%</td>
        </tr>

        <tr>
          <th>Requisitos de negocio para el control de accesos</th>
          <td>{props.controlAcceso()[0]}%</td>
        </tr>

        <tr>
          <th>Gestión de acceso de usuario.</th>
          <td>{props.controlAcceso()[1]}%</td>
        </tr>

        <tr>
          <th>Control de acceso a sistemas y aplicaciones</th>
          <td>{props.controlAcceso()[2]}%</td>
        </tr>

        <tr>
          <th>Areas Seguras</th>
          <td>{props.ambiental()[0]}%</td>
        </tr>

        <tr>
          <th>Seguridad de los Equipos</th>
          <td>{props.ambiental()[1]}%</td>
        </tr>

        <tr>
          <th>Protección contra código malicioso</th>
          <td>{props.defineOperativa()[0]}%</td>
        </tr>

        <tr>
          <th>Copias de seguridad</th>
          <td>{props.defineOperativa()[1]}%</td>
        </tr>

        <tr>
          <th>Gestión de la seguridad en las redes</th>
          <td>{props.defineTele()[0]}%</td>
        </tr>

        <tr>
          <th>Intercambio de información con partes externas</th>
          <td>{props.defineTele()[1]}%</td>
        </tr>

        <tr>
          <th>Seguridad en los procesos de desarrollo y soporte</th>
          <td>{props.defineDesarrollo()}%</td>
        </tr>

        <tr>
          <th>Cumplimiento</th>
          <td>{props.cumplimientoGeneral()}%</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Cumpoc;
