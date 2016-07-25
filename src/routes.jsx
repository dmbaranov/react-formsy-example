import React from 'react';
import { Route } from 'react-router';

import App from 'containers/App/';
import Login from 'containers/Login';

export const routes = (
  <div>
    <Route path="/" component={App}>
      <Route path="/login" component={Login}/>
    </Route>
  </div>
);