import React from 'react';
import { Link, Route } from "react-router-dom";
import './App.css';

const Assets = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Entities = () => (
  <div>
    <h2>Entities</h2>
  </div>
);

function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Assets</Link>
          </li>
          <li>
            <Link to="/entities">Entities</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Assets} />
      <Route path="/entities" component={Entities} />
  </div>
  );
}

export default App;
