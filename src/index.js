import React from 'react';
import { render } from 'react-dom';

import App from './App';
import { RootProvider } from './RootProvider';

render(
  <RootProvider>
    <App />
  </RootProvider>,
  document.getElementById('root'),
);
