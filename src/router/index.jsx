import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Index from '../pages';
import Home from '@/pages/Home';
import ArticleDetail from '@/pages/ArticleDetail';
import Author from '@/pages/Author';

const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/detail/:id',
    component: ArticleDetail,
  },
  {
    path: '/author',
    component: Author,
  },
  {
    path: '/users',
    component: Author,
  },
];

class SelfRouter extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {routes.map((route, index) => (
            <Route path={route.path} key={index} exact component={route.component}></Route>
          ))}
        </Switch>
      </HashRouter>
    );
  }
}

export default SelfRouter;
