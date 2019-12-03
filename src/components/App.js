import React from "react";
import Home from "../pages/Home";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Layout = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

const RouterLayout = ({ component: Component, ...args }) => (
  <Route
    {...args}
    render={matchProps => (
      <Layout>
        <Component {...matchProps} />
      </Layout>
    )}
  />
);

const App = () => (
  <BrowserRouter>
    <Switch>
      <RouterLayout path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
