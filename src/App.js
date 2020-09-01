import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/Navbar/Navbar';

const AssetsPage = lazy(() => import('./components/views/AssetsPage/AssetsPage'));
const EntitiesPage = lazy(() => import('./components/views/EntitiesPage/EntitiesPage'));

function App() {
  const renderLoader = () => <p>Loading</p>;
  return (
    <div className="App">
      <Navbar />
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
