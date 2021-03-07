import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Library from './components/Library/Library';
import Search from './components/Search/Search';
import Login from './components/Login/Login';

function App() {

  // Create UseState
  const [token, setToken] = useState();

  return (
    <Router>
      {/* common page elements */}
      <h1>Application Title</h1>
      {
        (token)?
        // If there's a Login Token 
        <Switch>
          <Route path="/library"><Library /></Route>
          <Route path="/search"><Search /></Route>
          <Route path="/"><Home /></Route>
        </Switch>:<Login setToken={setToken} />
      }
    </Router>
  );
}

export default App;
