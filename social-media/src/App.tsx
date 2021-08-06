import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import PostComponent from './components/posts/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/posts' component={PostComponent} />
      </Switch>
    </div>
  );
}

export default App;
