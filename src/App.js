import React from 'react';
import { Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import routes from '@/pages';
import { RoutesConfig } from '@/modules/RoutesConfig';
import { Menu } from '@/modules/Menu';

const App = () => (
  <>
    <Menu />
    <RoutesConfig routes={routes} notFound={<Redirect to="/" />} />
  </>
);

export default hot(module)(App);
