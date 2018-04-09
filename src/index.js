import React from 'react';
import { render } from 'react-dom';

import App from './App';
import { RootProvider } from '@/modules/RootProvider';

render(
  <RootProvider>
    <App />
  </RootProvider>,
  document.getElementById('root'),
);
