import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import appStore from 'store';

import TopBar from 'components/TopBar';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Files from 'pages/Files';
import Async from 'pages/Async';

const ReactBase = () => (
  <Provider store={appStore}>
    <BrowserRouter>
      <Layout>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/files" component={Files} />
          <Route path="/async" component={Async} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
);

// document bootstrap
const app = document.createElement('div');
document.body.style.margin = 0;
document.body.style.padding = 0;
document.body.appendChild(app);

ReactDom.render(<ReactBase />, app);
