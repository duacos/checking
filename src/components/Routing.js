import React from "react";
import Home from "../pages/Home";
import Layout from "./Layout";

import { BrowserRouter, Switch, Route } from "react-router-dom";

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

const Routing = () => (
  <BrowserRouter>
    <Switch>
      <RouterLayout path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
