import React, { lazy, Suspense } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
const AssetsPage = lazy(() => import('./components/views/AssetsPage/AssetsPage'));
const EntitiesPage = lazy(() => import('./components/views/EntitiesPage/EntitiesPage'));

function App() {
  const renderLoader = () => <p>Loading</p>;
  return (
    <div className="App">
      <nav className="navbar">
        <ul className="nav">
          <li className="navItem">
            <Link to="/assets">Assets</Link>
          </li>
          <li className="navItem">
            <Link to="/entities">Entities</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={renderLoader()}>
        <div className="container">
          <Switch>
            <Redirect exact from="/" to="/assets"/>
            <Route exact path="/assets" component={AssetsPage} />
            <Route path="/entities" component={EntitiesPage} />
          </Switch>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
