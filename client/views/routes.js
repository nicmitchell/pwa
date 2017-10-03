import React from 'react';
import { Route, IndexRoute } from 'react-router';
import importCss from 'core/importCss';
import Wrapper from 'views/Wrapper/Wrapper';
import NotFoundPage from 'views/NotFoundPage/NotFoundPage';

export default (
  <Route path="/" component={Wrapper}>

    <IndexRoute
      name="landing"
      getComponent={(_, cb) => {
        Promise.all([
          import('views/LandingPage/LandingPage' /* webpackChunkName: 'landing' */),
          importCss('landing'),
        ]).then(([module]) => cb(null, module.default));
      }}
    />

    <Route path="*" component={NotFoundPage} />

  </Route>
);