import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Color from './pages/color';
import Gradient from './pages/gradient';

export default function App() {
  return (
    <Switch>
      <Route path="/color">
        <Color />
      </Route>
      <Route path="/gradient">
        <Gradient />
      </Route>
      <Route path="/">
        <Color />
      </Route>
    </Switch>
  );
}
