import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage.js';
//Test Pages START
import TestMochaPage from './components/TestMochaPage.js';
import TestTapePage from './components/TestTapePage.js';
//Test Pages END
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage}/>
    <Route path="dashboard" component={DashboardPage}/>
	<Route path="testMocha" component={TestMochaPage}/>
    <Route path="testTape" component={TestTapePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
