import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Footer from '../components/Footer/index';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route path="/" component={Main} exact />
      </Switch>
      <Footer />
    </Fragment>

  </BrowserRouter>
);

export default Routes;
