import React, { lazy, Suspense } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
const AssetsPage = lazy(() => import('./components/views/AssetsPage/AssetsPage'));
const EntitiesPage = lazy(() => import('./components/views/EntitiesPage/EntitiesPage'));

function App() {
  const renderLoader = () => <p>Loading</p>;
  return (
    <Suspense fallback={renderLoader()}>
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
          <Route path="/entities" component={EntitiesPage} />
        </Switch>
    </div>
  </Suspense>
  );
}

export default App;
