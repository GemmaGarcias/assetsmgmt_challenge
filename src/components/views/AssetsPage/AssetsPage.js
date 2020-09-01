import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { getAssets } from "../../../services/services";
const CustomTable = lazy(() => import('../../common/CustomTable/CustomTable'));


function AssetsPage() {
  const [assets, setAssets] = useState([]);
  const [errorState, setErrorState] = useState({ hasErrors: false });

  useEffect(() => {
    getAssets().then(setAssets).catch(handleError);
  }, []);

  function handleError(err) {
    setErrorState({ hasErrors: true, message: err.message });
  }

  function getObjectKeys(obj) {
    return Object.keys(obj);
  }

  const goToEntitiesComponent = () => <button><Link to="/entities">Go to Entities</Link></button>;
  const renderLoader = () => <p>Loading</p>;

  return (
    <Suspense fallback={renderLoader()}>
      <>
        <h2>Assets</h2>
        {errorState.hasErrors && <div>{errorState.message}</div>}
        <CustomTable 
          headers={getObjectKeys(assets.length && assets[0])}
          data={assets} 
          addColumn={{header: "Go to", content: goToEntitiesComponent()}}/>
      </>    
    </Suspense>
  );
}

export default AssetsPage;
