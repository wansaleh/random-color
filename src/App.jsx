import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Color from './pages/color';
import Gradient from './pages/gradient';
import GradientTW from './pages/gradienttw';

export default function App() {
  return (
    <Switch>
      <Route path="/color">
        <Color />
      </Route>
      <Route path="/gradient">
        <Gradient />
      </Route>
      <Route path="/gradienttw">
        <GradientTW />
      </Route>
      <Route path="/">
        <Color />
      </Route>
    </Switch>
  );
}
