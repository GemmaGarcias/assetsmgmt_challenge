import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/Navbar/Navbar';

const AssetsPage = lazy(() => import('./components/views/AssetsPage/AssetsPage'));
const EntitiesPage = lazy(() => import('./components/views/EntitiesPage/EntitiesPage'));

const publicURL = process.env.PUBLIC_URL;

function App() {
  const renderLoader = () => <p>Loading</p>;
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={renderLoader()}>
        <div className="container">
          <Switch>
            <Redirect exact from={`${publicURL}`} to={`${publicURL}/assets`}/>
            <Route exact path={`${publicURL}/assets`} component={AssetsPage} />
            <Route path={`${publicURL}/entities`} component={EntitiesPage} />
          </Switch>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
