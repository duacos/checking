import React from "react";
import Home from "../pages/Home";
import EditEmpresa from "../pages/EditEmpresa";
import NewEmpresa from "../pages/NewEmpresa";
import ShowEmpresa from "../pages/ShowEmpresa";
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
      <RouterLayout exact path="/" component={Home} />

      <RouterLayout
        exact
        path="/empresas/:empresa_id/edit"
        component={EditEmpresa}
      />

      <RouterLayout
        exact
        path="/empresas/:empresa_id"
        component={ShowEmpresa}
      />
      <RouterLayout path="/new" component={NewEmpresa} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
