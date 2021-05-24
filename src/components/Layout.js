import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import styled from 'styled-components';
import Home from '../pages/Home';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Content>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </Content>
      <Footer />
    </>
  );
};

export default Layout;


const Content = styled.main`
  min-height: 100vh;
`