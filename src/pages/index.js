import React from 'react';
import Loadable from 'react-loadable';

const loadableConfig = {
  loading: () => 'Loading...',
};

const Index = Loadable({
  loader: () => import('./IndexPage' /* webpackChunkName: "index-page" */),
  ...loadableConfig,
});

const About = Loadable({
  loader: () => import('./About' /* webpackChunkName: "about-page" */),
  ...loadableConfig,
});

const Counters = Loadable({
  loader: () =>
    import('./CountersPage' /* webpackChunkName: "counters-page" */),
  ...loadableConfig,
});

const BabelTest = Loadable({
  loader: () => import('./BabelTest' /* webpackChunkName: "babel-test-page" */),
  ...loadableConfig,
});

const ChuckNorrisJokes = Loadable({
  loader: () =>
    import('./ChuckNorrisJokes' /* webpackChunkName: "chuck-norris" */),
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
  {
    path: '/counters',
    component: Counters,
  },
  {
    path: '/babel',
    component: BabelTest,
  },
  {
    path: '/chuck',
    component: ChuckNorrisJokes,
  },
];
