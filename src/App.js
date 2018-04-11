import React from 'react';
import { hot } from 'react-hot-loader';

import routes from '@/pages';
import { RoutesConfig } from '@/modules/RoutesConfig';
import { Menu } from '@/modules/Menu';
import { getNotFoundRoute } from '@/pages/NotFound';

const App = () => (
  <>
    <Menu />
    <RoutesConfig routes={routes} notFound={getNotFoundRoute()} />
  </>
);

export default hot(module)(App);
