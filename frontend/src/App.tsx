import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Counter from './pages/Counter';
import Home from './pages/Home';

interface AppProps {}

const App = ({}: AppProps) => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/counter'>
        <Counter />
      </Route>
    </Switch>
  );
};

export default App;