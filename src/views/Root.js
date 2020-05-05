import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import MainTemplate from 'templates/MainTemplate';
import MainPage from 'views/MainPage';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage';

const Root = () => (
  <MainTemplate>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={routes.home} component={MainPage} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.register} component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);
export default Root;
