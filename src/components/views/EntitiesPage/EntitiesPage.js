import React, { useState, useEffect, lazy, Suspense } from 'react';
import { getEntities } from "../../../services/services";
const CustomTable = lazy(() => import('../../common/CustomTable'));

function EntitiesPage() {
  const [entities, setEntities] = useState([]);
  const [errorState, setErrorState] = useState({ hasErrors: false });

  useEffect(() => {
    getEntities().then(setEntities).catch(handleError);
  }, []);

  function handleError(err) {
    setErrorState({ hasErrors: true, message: err.message });
  }

  function getObjectKeys(obj) {
    return Object.keys(obj);
  }
  const renderLoader = () => <p>Loading</p>;

  return (
    <Suspense fallback={renderLoader()}>
      <>
        <h2>Entities</h2>
        {errorState.hasErrors && <div>{errorState.message}</div>}
        <CustomTable 
          headers={getObjectKeys(entities.length && entities[0])}
          data={entities}/>
      </>
    </Suspense>
  );
}

export default EntitiesPage;