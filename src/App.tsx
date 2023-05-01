import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import RouteSetup from './components/RouteSetup';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div>
        <NavigationBar/>
        <RouteSetup/>
    </div>
  );
}

export default App;
