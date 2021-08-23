import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Below Function is to render out the routes config
function RenderRoutes({ routes }) {
  // Below function is to render the nested routes
  function RouteWithSubRoutes({ path, exact, routes, component: Component }) {
    return (
      <Route
        path={path}
        exact={exact}
        render={(props) => <Component {...props} routes={routes} />}
      />
    );
  }

  return (
    <Switch>
      {routes.map((route) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

export default RenderRoutes;
