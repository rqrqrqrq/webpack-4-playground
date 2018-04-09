import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

export const RoutesConfig = ({ routes, notFound }) => (
  <Switch>
    {routes.map(r => (
      <Route
        key={r.path}
        path={r.path}
        exact={r.exact}
        component={r.component}
      />
    ))}
    {notFound}
  </Switch>
);
