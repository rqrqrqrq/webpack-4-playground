import React from 'react';
import Loadable from 'react-loadable';

const loadableConfig = {
  loading: () => 'Loading...',
};

const Index = Loadable({
  loader: () => import(/* webpackChunkName: "index-page" */ './IndexPage'),
  ...loadableConfig,
});

export const routes = [
  {
    path: '/',
    component: Index,
  },
];
