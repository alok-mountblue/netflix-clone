import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/profile'>
            <ProfileScreen />
          </Route>
          <Route exact path='/'>
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
