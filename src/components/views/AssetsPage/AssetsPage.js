import React, { useState, useEffect } from 'react';
import { getAssets } from "../../../services/assets";
import CustomTable from '../../common/CustomTable';

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

  return (
    <>
        <h2>Assets</h2>
        {errorState.hasErrors && <div>{errorState.message}</div>}
        <CustomTable headers={getObjectKeys(assets.length && assets[0])} data={assets}/>
    </>
  );
}

export default AssetsPage;
