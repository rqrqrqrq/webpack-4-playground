import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const NotFoundPage = Loadable({
  loader: () =>
    import('./NotFoundPage' /* webpackChunkName: "not-found-page" */),
  loading: () => null,
});

export const getNotFoundRoute = () => (
  <Route
    path="*"
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.statusCode = 404;
      }

      return <NotFoundPage />;
    }}
  />
);
