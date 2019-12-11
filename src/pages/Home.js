import React from "react";
import "../styles/HomeStyles.sass";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as empresasActions from "../actions/empresasActions";
import { ReactComponent as AddButtonImg } from "../assets/images/round-add-button.svg";

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
          <Link to={`/empresas/${empresa.id}/edit`}>Editar</Link>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    if (this.props.loading === true) {
      return "loading...";
    }
    return (
      <div className="Home">
        <div className="content">
          <div className="center">
            <div className="itemList-item-test center-block">
              <div className="itemList-item-test-img">
                <Link to="/new">
                  <AddButtonImg />
                </Link>
              </div>
            </div>
          </div>
          <div className="itemList">{this.listEmpresas()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.empresasReducer;
};

export default connect(mapStateToProps, empresasActions)(Home);
