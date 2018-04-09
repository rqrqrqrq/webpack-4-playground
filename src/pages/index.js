import React from 'react';
import Loadable from 'react-loadable';

const loadableConfig = {
  loading: () => 'Loading...',
};

const Index = Loadable({
  loader: () => import(/* webpackChunkName: "index-page" */ './IndexPage'),
  ...loadableConfig,
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "about-page" */ './About'),
  ...loadableConfig,
});

export default [
  {
    path: '/',
    exact: true,
    component: Index,
  },
  {
    path: '/about',
    component: About,
  },
];
