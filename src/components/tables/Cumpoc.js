import React from "react";

const Cumpoc = props => {
  const calcularCalidad = porcentaje => {
    if (porcentaje <= 30) return "bajo";
    else if (porcentaje >= 31 && porcentaje <= 74) return "medio";
    else if (porcentaje >= 75 && porcentaje <= 100) return "alto";
  };

  const applyStyles = func => {
    const calidad = calcularCalidad(func);
    switch (calidad) {
      case "bajo":
        return { backgroundColor: "#ffeeee" };

      case "medio":
        return { backgroundColor: "#fffcca" };

      case "alto":
        return { backgroundColor: "#dbfddb" };
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">Objetivos de control</th>
        </tr>
      </thead>
      <tbody>
        <tr style={applyStyles(props.defineDirectrices())}>
          <th>Directrices de la Dirección en seguridad de la información</th>
          <td>{props.defineDirectrices()}%</td>
        </tr>
        <tr style={applyStyles(props.responsabilidad()[0])}>
          <th>Responsabilidad sobre los Activos</th>
          <td>{props.responsabilidad()[0]}%</td>
        </tr>

        <tr style={applyStyles(props.responsabilidad()[1])}>
          <th>Clasificacion de la Informacion</th>
          <td>{props.responsabilidad()[1]}%</td>
        </tr>

        <tr style={applyStyles(props.responsabilidad()[2])}>
          <th>Manejo de los soportes de almacenamiento</th>
          <td>{props.responsabilidad()[2]}%</td>
        </tr>

        <tr style={applyStyles(props.controlAcceso()[0])}>
          <th>Requisitos de negocio para el control de accesos</th>
          <td>{props.controlAcceso()[0]}%</td>
        </tr>

        <tr style={applyStyles(props.controlAcceso()[1])}>
          <th>Gestión de acceso de usuario.</th>
          <td>{props.controlAcceso()[1]}%</td>
        </tr>

        <tr style={applyStyles(props.controlAcceso()[2])}>
          <th>Control de acceso a sistemas y aplicaciones</th>
          <td>{props.controlAcceso()[2]}%</td>
        </tr>

        <tr style={applyStyles(props.ambiental()[0])}>
          <th>Areas Seguras</th>
          <td>{props.ambiental()[0]}%</td>
        </tr>

        <tr style={applyStyles(props.ambiental()[1])}>
          <th>Seguridad de los Equipos</th>
          <td>{props.ambiental()[1]}%</td>
        </tr>

        <tr style={applyStyles(props.defineOperativa()[0])}>
          <th>Protección contra código malicioso</th>
          <td>{props.defineOperativa()[0]}%</td>
        </tr>

        <tr style={applyStyles(props.defineOperativa()[1])}>
          <th>Copias de seguridad</th>
          <td>{props.defineOperativa()[1]}%</td>
        </tr>

        <tr style={applyStyles(props.defineTele()[0])}>
          <th>Gestión de la seguridad en las redes</th>
          <td>{props.defineTele()[0]}%</td>
        </tr>

        <tr style={applyStyles(props.defineTele()[1])}>
          <th>Intercambio de información con partes externas</th>
          <td>{props.defineTele()[1]}%</td>
        </tr>

        <tr style={applyStyles(props.defineDesarrollo())}>
          <th>Seguridad en los procesos de desarrollo y soporte</th>
          <td>{props.defineDesarrollo()}%</td>
        </tr>

        <tr style={applyStyles(props.cumplimientoGeneral())}>
          <th>
            <b>Cumplimiento</b>
          </th>
          <td>
            <b>{props.cumplimientoGeneral()}%</b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Cumpoc;
