import React from "react";

class CumpDominios extends React.Component {
  defineDirectrices(data) {
    if (data)
      return this.props.promedio(data.seguridad_info, data.revision_string);
    else return 0;
  }

  responsabilidad(data) {
    if (data) {
      const promedio1 = this.props.promedio(
        data.inventario,
        data.propiedad,
        data.uso,
        data.devolucion
      );

      const promedio2 = this.props.promedio(data.directrices, data.etiquetado);

      const promedio3 = this.props.promedio(
        data.gestion,
        data.eliminacion,
        data.soportes
      );

      return this.props.promedio(promedio1, promedio2, promedio3);
    } else return 0;
  }

  controlAcceso(data) {
    if (data) {
      const promedio1 = this.props.promedio(
        data.politicaControl,
        data.controlAcceso
      );
      const promedio2 = this.props.promedio(
        data.gestionAltasBajas,
        data.gestionDerechosUsuarios,
        data.gestionDerechosUsuarios,
        data.gestionDerechosEspeciales,
        data.revisionDerechos,
        data.retirada
      );

      const promedio3 = this.props.promedio(
        data.restriccion,
        data.procedimientos,
        data.gestionPassword,
        data.uso,
        data.accesoCodigo
      );

      return this.props.promedio(promedio1, promedio2, promedio3);
    } else return 0;
  }

  ambiental(data) {
    if (data) {
      const promedio1 = this.props.promedio(
        data.perimetros,
        data.controles,
        data.seguridad,
        data.proteccion,
        data.areasSeguras,
        data.accesoPublico
      );

      const promedio2 = this.props.promedio(
        data.emplazamiento,
        data.instalaciones,
        data.cableado,
        data.mantenimiento,
        data.salidaActivos,
        data.seguridadEquipos,
        data.reutilizacion,
        data.equipo,
        data.politica
      );
      return this.props.promedio(promedio1, promedio2);
    } else return 0;
  }

  defineOperativa(data) {
    if (data) {
      const promedio1 = this.props.promedio(data.codigoMalicioso);

      const promedio2 = this.props.promedio(data.copiaSeguridad);
      return this.props.promedio(promedio1, promedio2);
    } else return 0;
  }

  defineTele(data) {
    if (data) {
      const promedio1 = this.props.promedio(
        data.controles,
        data.mecanismos,
        data.segregacion
      );

      const promedio2 = this.props.promedio(
        data.politicas,
        data.intercambio,
        data.mensajeria,
        data.confidencialidad
      );
      return this.props.promedio(promedio1, promedio2);
    } else return 0;
  }

  defineDesarrollo(data) {
    if (data) {
      const promedio1 = this.props.promedio(
        data.politica,
        data.seguridad,
        data.funcionalidad,
        data.aceptacion
      );

      return this.props.promedio(promedio1);
    } else return 0;
  }

  cumplimientoGeneral() {
    return this.props.promedio(
      this.defineDirectrices(this.props.empresasReducer.data.politica),
      this.responsabilidad(this.props.empresasReducer.data.activo),
      this.controlAcceso(this.props.empresasReducer.data.acceso),
      this.ambiental(this.props.empresasReducer.data.ambiente),
      this.defineOperativa(this.props.empresasReducer.data.operativa),
      this.defineTele(this.props.empresasReducer.data.tele),
      this.defineDesarrollo(this.props.empresasReducer.data.desarrollo)
    );
  }

  render() {
    console.log(this.props);
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
            <td>
              {this.defineDirectrices(this.props.empresasReducer.data.politica)}
              %
            </td>
          </tr>
          <tr>
            <th>Gestión de activos</th>
            <td>
              {this.responsabilidad(this.props.empresasReducer.data.activo)}%
            </td>
          </tr>
          <tr>
            <th>Control de acceso</th>
            <td>
              {this.controlAcceso(this.props.empresasReducer.data.acceso)}%
            </td>
          </tr>

          <tr>
            <th>Seguridad física y ambiental</th>
            <td>{this.ambiental(this.props.empresasReducer.data.ambiente)}%</td>
          </tr>

          <tr>
            <th>Seguridad en la operativa</th>
            <td>
              {this.defineOperativa(this.props.empresasReducer.data.operativa)}%
            </td>
          </tr>

          <tr>
            <th>Seguridad en las telecomunicaciones</th>
            <td>{this.defineTele(this.props.empresasReducer.data.tele)}%</td>
          </tr>

          <tr>
            <th>
              Adquisición, desarrollo y mantenimiento de los sistemas de
              información
            </th>
            <td>
              {this.defineDesarrollo(
                this.props.empresasReducer.data.desarrollo
              )}
              %
            </td>
          </tr>

          <tr>
            <th>Cumplimiento general</th>
            <td>{this.cumplimientoGeneral()}%</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default CumpDominios;
