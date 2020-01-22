import React from "react";
import CumpDominios from "./tables/CumpDominios";

import CanvasJSReact from "../lib/canvasjs.react";

//const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart1 extends React.Component {
  defineDirectrices(data) {
    if (data) {
      this.promedioFinal1 = this.props.promedio(
        data.seguridad_info,
        data.revision_string
      );

      return this.promedioFinal1;
    } else {
      this.promedioFinal1 = 0;
      return 0;
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
      this.promedioFinal2 = this.props.promedio(
        promedio1,
        promedio2,
        promedio3
      );

      return this.promedioFinal2;
    } else {
      this.promedioFinal2 = 0;
      return 0;
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

      this.promedioFinal3 = this.props.promedio(
        promedio1,
        promedio2,
        promedio3
      );
      return this.promedioFinal3;
    } else {
      this.promedioFinal3 = 0;
      return 0;
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
      this.promedioFinal4 = this.props.promedio(promedio1, promedio2);
      return this.promedioFinal4;
    } else {
      this.promedioFinal4 = 0;
      return 0;
    }
  }

  defineOperativa(data) {
    if (data) {
      const promedio1 = this.props.promedio(data.codigoMalicioso);

      const promedio2 = this.props.promedio(data.copiaSeguridad);
      this.promedioFinal5 = this.props.promedio(promedio1, promedio2);
      return this.promedioFinal5;
    } else {
      this.promedioFinal5 = 0;
      return 0;
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
      this.promedioFinal6 = this.props.promedio(promedio1, promedio2);
      return this.promedioFinal6;
    } else {
      this.promedioFinal6 = 0;
      return 0;
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

      this.promedioFinal7 = this.props.promedio(promedio1);
      return this.promedioFinal7;
    } else {
      this.promedioFinal7 = 0;
      return 0;
    }
  }

  cumplimientoGeneral() {
    return this.props.promedio(
      this.promedioFinal1,
      this.promedioFinal2,
      this.promedioFinal3,
      this.promedioFinal4,
      this.promedioFinal5,
      this.promedioFinal6,
      this.promedioFinal7
    );
  }
  render() {
    this.options = {
      animationEnabled: true,
      animationDuration: 5000,
      fontFamily: "Nunito Sans",
      exportEnabled: true,
      height: 500,
      title: {
        text: "Nivel de cumplimiento por dominio"
      },
      data: [
        {
          type: "column",
          dataPoints: [
            {
              label: "Políticas",
              y: this.defineDirectrices(
                this.props.empresasReducer.data.politica
              )
            },
            {
              label: "Gestion de activos ",
              y: this.responsabilidad(this.props.empresasReducer.data.activo)
            },
            {
              label: "Control de acceso",
              y: this.controlAcceso(this.props.empresasReducer.data.acceso)
            },
            {
              label: "física y ambiental",
              y: this.ambiental(this.props.empresasReducer.data.ambiente)
            },
            {
              label: "Seg. operativa",
              y: this.defineOperativa(this.props.empresasReducer.data.operativa)
            },
            {
              label: "Seg. de telecomunicaciones",
              y: this.defineTele(this.props.empresasReducer.data.tele)
            },
            {
              label: "desarrollo  y mantenimiento",
              y: this.defineDesarrollo(
                this.props.empresasReducer.data.desarrollo
              )
            }
          ]
        }
      ]
    };
    return (
      <div className="data-section">
        <div className="data-list">
          <div className="data-banner">
            <CumpDominios
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

        <div className="graph-banner">
          <CanvasJSChart options={this.options} />
        </div>
      </div>
    );
  }
}

export default Chart1;
