import './App.css';
import React from 'react'
import Join from './Component/Join'
import Invite from './Component/Invite'
import Home from './Component/Home'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
      <Router>
        <div>
            <Route path="/" exact component={Home}></Route>
            <Route path="/join/:token" component={Join}></Route>
            <Route path="/invite" component={Invite}></Route>
        </div>
      </Router>
  );
}

export default App;
