import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const NotFoundPage = Loadable({
  loader: () =>
    import(/* webpackChunkName: "not-found-page" */ './NotFoundPage'),
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
