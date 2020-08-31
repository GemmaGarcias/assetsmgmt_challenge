import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import AssetsPage from './components/views/AssetsPage/AssetsPage';
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
            <Link to="/assets">Assets</Link>
          </li>
          <li>
            <Link to="/entities">Entities</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Redirect exact from="/" to="/assets"/>
        <Route exact path="/assets" component={AssetsPage} />
        <Route path="/entities" component={Entities} />
      </Switch>
  </div>
  );
}

export default App;
