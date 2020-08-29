import React from 'react';
import { Link, Route } from "react-router-dom";
import AssetsPage from './components/AssetsPage/AssetsPage';
import './App.css';

const Entities = () => (
  <div>
    <h2>Entities</h2>
  </div>
);

function App() {
  return (
    <div className="App">
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
      <Route exact path="/" component={AssetsPage} />
      <Route path="/entities" component={Entities} />
  </div>
  );
}

export default App;
