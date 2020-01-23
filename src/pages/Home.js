import React from "react";
import "../styles/HomeStyles.sass";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as empresasActions from "../actions/empresasActions";
import Pacman from "../components/Pacman";
import NewEmpresa from "./NewEmpresa";

class Home extends React.Component {
  componentDidMount() {
    if (!this.props.data.length) this.props.traerTodos();
  }

  listEmpresas() {
    return Array.from(this.props.data).map(empresa => {
      return (
        <div key={empresa.id} className="itemList-item">
          <h1>
            <Link to={`/empresas/${empresa.id}`}>{empresa.name}</Link>
          </h1>
          {empresa.description}
          <Link to={`/empresas/${empresa.id}/edit`}> - Editar</Link>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    if (this.props.loading === true) {
      return <Pacman />;
    }
    return (
      <div className="Home">
        <div className="itemList-item-test">
          <NewEmpresa crearEmpresa={this.props.crearEmpresa} />
        </div>

        <div className="itemList">{this.listEmpresas()}</div>
      </div>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.empresasReducer;
};

export default connect(mapStateToProps, empresasActions)(Home);
