import React from 'react';
import { Redirect } from 'react-router-dom';

import { RoutesConfig } from '@/modules/RoutesConfig';
import { routes } from '@/pages/routes';

export const App = () => (
  <RoutesConfig routes={routes} injectAfter={<Redirect to="/" />} />
);
