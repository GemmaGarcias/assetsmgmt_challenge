import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAssets } from "../../../services/services";
import { getObjectKeys } from '../../../utils/utils';
import RenderLoader from '../../common/RenderLoader/RenderLoader';
import CustomTable from '../../common/CustomTable/CustomTable';

const publicURL = process.env.REACT_APP_PUBLIC_URL;

function AssetsPage() {
  const [assets, setAssets] = useState();
  const [errorState, setErrorState] = useState({ hasErrors: false });

  useEffect(() => {
    getAssets().then(setAssets).catch(handleError);
  }, []);

  function handleError(err) {
    setErrorState({ hasErrors: true, message: err.message });
  }

  const goToEntitiesComponent = () => <button className="table-button"><Link to={`${publicURL}entities`}>Go to Entities</Link></button>;

  return (
      <>
        <h2>Assets</h2>  
        {errorState.hasErrors && <div>{errorState.message}</div>}  
        {assets ? 
          <CustomTable 
            headers={getObjectKeys(assets.length && assets[0])}
            data={assets} 
            addColumn={{header: "Go to", content: goToEntitiesComponent()}}/>
          :
          <RenderLoader text="Wait I'm loading assets for you"/>
        }
      </>
  );
}

export default AssetsPage;
