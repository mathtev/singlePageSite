import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/Home';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route path="/home" exact component={Home} />
        </Switch>
      </main>
    </>
  );
};

export default Layout;
