import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen.js';

function App() {
  const user = null;

  return <div className="app">{!user ? <LoginScreen /> : <HomeScreen />}</div>;
}

export default App;
