import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import appStore from 'store';

import Home from 'pages/Home';
import One from 'pages/One';
import Two from 'pages/Two';
import Three from 'pages/Three';
import TopBar from 'components/TopBar';
import Layout from 'components/Layout';

const ReactBase = () => (
  <Provider store={appStore}>
    <BrowserRouter>
      <Layout>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/one" component={One} />
          <Route path="/two" component={Two} />
          <Route path="/three" component={Three} />
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
