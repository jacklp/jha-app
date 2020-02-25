import React from 'react';
import './App.css';
import Home from './pages/home'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Home}>
        </Route>
      </Router>
    </div>
  );
}

export default App;
