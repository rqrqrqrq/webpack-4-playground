import React from 'react';
import { Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { RoutesConfig } from '@/modules/RoutesConfig';
import { routes } from '@/pages/routes';

const App = () => (
  <RoutesConfig routes={routes} injectAfter={<Redirect to="/" />} />
);

export default hot(module)(App);
