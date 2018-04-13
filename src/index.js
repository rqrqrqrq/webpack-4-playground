import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { RootProvider } from './modules/RootProvider';

const ROOT_EL_ID = 'root';

const rootEl = document.getElementById(ROOT_EL_ID);

if (!rootEl) {
  throw new Error(`Cannot find element with id '#${ROOT_EL_ID}`);
}

const wrapInProvider = (Provider, AppComponent) => (
  <Provider>
    <AppComponent />
  </Provider>
);

const render = vdom => ReactDOM.render(vdom, rootEl);

render(wrapInProvider(RootProvider, App));

if (module.hot) {
  module.hot.accept(['./App', './modules/RootProvider'], () => {
    const newApp = require('./App');

    const provider = require('./modules/RootProvider');

    ReactDOM.unmountComponentAtNode(rootEl);

    render(wrapInProvider(provider, newApp));
  });
}
