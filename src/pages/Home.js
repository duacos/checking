import React from "react";
import "../styles/App.sass";

import { connect } from "react-redux";
import * as empresasActions from "../actions/empresasActions";

class App extends React.Component {
  componentDidMount() {
    this.props.traerTodos();
  }
  render() {
    console.log(this.props);
    return <div className="App">Hola mundo</div>;
  }
}

const mapStateToProps = reducers => {
  return reducers.empresasReducer;
};

export default connect(mapStateToProps, empresasActions)(App);
