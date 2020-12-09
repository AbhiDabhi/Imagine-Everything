import './App.css';
import React from 'react';

import { Switch, Route } from 'react-router-dom';

import DetailPage from './pages/detail/detail.component';
import HomePage from './pages/home/home.component';

function App() {
  return (
    <div className='homepage'>
      <h2> Imagine Everything 💭 </h2>

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/:recordId' component={DetailPage} />
      </Switch>
    </div>
  );
}
export default App;
