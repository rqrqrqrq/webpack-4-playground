import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

export const RoutesConfig = ({ routes, injectAfter }) => (
  <Switch>
    {routes.map(r => (
      <Route key={r.path} path={r.path} component={r.component} />
    ))}
    {injectAfter}
  </Switch>
);
