import React from "react";
import Cumpoc from "./tables/Cumpoc";

import CanvasJSReact from "../lib/canvasjs.react";
import Chart3 from "./Chart3";

//const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart2 extends React.Component {
  defineDirectrices(data) {
    if (data) {
      this.promedioFinal1 = this.props.promedio(
        data.seguridad_info,
        data.revision_string
      );

      return this.promedioFinal1;
    } else {
      this.promedioFinal1 = 0;
      return this.promedioFinal1;
    }
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
      this.promedioFinal2 = [promedio1, promedio2, promedio3];
      return this.promedioFinal2;
    } else {
      this.promedioFinal2 = [0, 0, 0];
      return this.promedioFinal2;
    }
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

      this.promedioFinal3 = [promedio1, promedio2, promedio3];

      return this.promedioFinal3;
    } else {
      this.promedioFinal3 = [0, 0, 0];
      return this.promedioFinal3;
    }
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
      this.promedioFinal4 = [promedio1, promedio2];
      return this.promedioFinal4;
    } else {
      this.promedioFinal4 = [0, 0];
      return this.promedioFinal4;
    }
  }

  defineOperativa(data) {
    if (data) {
      const promedio1 = this.props.promedio(data.codigoMalicioso);

      const promedio2 = this.props.promedio(data.copiaSeguridad);
      this.promedioFinal5 = [promedio1, promedio2];
      return this.promedioFinal5;
    } else {
      this.promedioFinal5 = [0, 0];
      return this.promedioFinal5;
    }
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
      this.promedioFinal6 = [promedio1, promedio2];
      return this.promedioFinal6;
    } else {
      this.promedioFinal6 = [0, 0];
      return this.promedioFinal6;
    }
  }

  defineDesarrollo(data) {
    if (data) {
      const promedio1 = this.props.promedio(
        data.politica,
        data.seguridad,
        data.funcionalidad,
        data.aceptacion
      );

      this.promedioFinal7 = promedio1;
      return this.promedioFinal7;
    } else {
      this.promedioFinal7 = 0;
      return this.promedioFinal7;
    }
  }

  cumplimientoGeneral() {
    return this.props.promedio(
      this.promedioFinal1,
      this.promedioFinal2[0],
      this.promedioFinal2[1],
      this.promedioFinal2[2],
      this.promedioFinal3[0],
      this.promedioFinal3[1],
      this.promedioFinal3[2],
      this.promedioFinal4[0],
      this.promedioFinal4[1],
      this.promedioFinal5[0],
      this.promedioFinal5[1],
      this.promedioFinal6[0],
      this.promedioFinal6[1],
      this.promedioFinal7
    );
  }
  render() {
    this.options = {
      animationEnabled: true,
      exportEnabled: true,
      height: 500,
      animationDuration: 5000,
      title: {
        text: "Objetivos de control"
      },
      data: [
        {
          type: "column",
          dataPoints: [
            {
              label: "Directrices de la Dirección en seguridad de la info",
              y: this.defineDirectrices(
                this.props.empresasReducer.data.politica
              )
            },
            {
              label: "Responsabilidad sobre los Activos",
              y: this.responsabilidad(this.props.empresasReducer.data.activo)[0]
            },
            {
              label: "Clasificacion de la Informacion",
              y: this.responsabilidad(this.props.empresasReducer.data.activo)[1]
            },
            {
              label: "Manejo de los soportes de almacenamiento",
              y: this.responsabilidad(this.props.empresasReducer.data.activo)[2]
            },
            {
              label: "Req. de negocio para el control de accesos",
              y: this.controlAcceso(this.props.empresasReducer.data.acceso)[0]
            },
            {
              label: "Gestión de acceso de usuario",
              y: this.controlAcceso(this.props.empresasReducer.data.acceso)[1]
            },
            {
              label: "Control de acceso a sistemas y Apps",
              y: this.controlAcceso(this.props.empresasReducer.data.acceso)[2]
            },
            {
              label: "Areas Seguras",
              y: this.ambiental(this.props.empresasReducer.data.ambiente)[0]
            },
            {
              label: "Seguridad de los Equipos",
              y: this.ambiental(this.props.empresasReducer.data.ambiente)[1]
            },
            {
              label: "Protección contra código malicioso",
              y: this.defineOperativa(
                this.props.empresasReducer.data.operativa
              )[0]
            },
            {
              label: "Copias de seguridad",
              y: this.defineOperativa(
                this.props.empresasReducer.data.operativa
              )[1]
            },
            {
              label: "Gestión de la seguridad en las redes",
              y: this.defineTele(this.props.empresasReducer.data.tele)[0]
            },
            {
              label: "Intercambio de info con partes externas",
              y: this.defineTele(this.props.empresasReducer.data.tele)[1]
            },
            {
              label: "Seguridad en los procesos de desarrollo y soporte",
              y: this.defineDesarrollo(
                this.props.empresasReducer.data.desarrollo
              )
            }
          ]
        }
      ]
    };
    return (
      <div className="feature-section">
        <div className="feature-list">
          <div className="show-banner">
            <Cumpoc
              defineDirectrices={this.defineDirectrices.bind(
                this,
                this.props.empresasReducer.data.politica
              )}
              responsabilidad={this.responsabilidad.bind(
                this,
                this.props.empresasReducer.data.activo
              )}
              controlAcceso={this.controlAcceso.bind(
                this,
                this.props.empresasReducer.data.acceso
              )}
              ambiental={this.ambiental.bind(
                this,
                this.props.empresasReducer.data.ambiente
              )}
              defineOperativa={this.defineOperativa.bind(
                this,
                this.props.empresasReducer.data.operativa
              )}
              defineTele={this.defineTele.bind(
                this,
                this.props.empresasReducer.data.tele
              )}
              defineDesarrollo={this.defineDesarrollo.bind(
                this,
                this.props.empresasReducer.data.desarrollo
              )}
              cumplimientoGeneral={this.cumplimientoGeneral.bind(this)}
            />
          </div>
        </div>
        <div className="feature-banner ">
          <div className="show-banner-2">
            <CanvasJSChart options={this.options} />
          </div>
          <Chart3 empresasReducer={this.props.empresasReducer} />
        </div>
      </div>
    );
  }
}

export default Chart2;
