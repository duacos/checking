import React from "react";
import "../styles/HomeStyles.sass";
import { connect } from "react-redux";
import * as empresasActions from "../actions/empresasActions";

class App extends React.Component {
  componentDidMount() {
    this.props.traerTodos();
  }

  listEmpresas() {
    return this.props.data.map(empresa => {
      return (
        <div key={empresa.id} className="itemList-item">
          <h1>{empresa.name}</h1>
          {empresa.description}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="Home">
        <div className="content">
          <div className="itemList">{this.listEmpresas()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.empresasReducer;
};

export default connect(mapStateToProps, empresasActions)(App);
