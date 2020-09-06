import React, { useState, useEffect } from 'react';
import { getEntities } from "../../../services/services";
import { getObjectKeys, getLastItem } from '../../../utils/utils';
import { useLocation } from 'react-router-dom';
import RenderLoader from '../../common/RenderLoader/RenderLoader';
import CustomTable from '../../common/CustomTable/CustomTable';

function EntitiesPage() {
  const location = useLocation();
  const [entities, setEntities] = useState();
  const [errorState, setErrorState] = useState({ hasErrors: false });

  useEffect(() => {
    const id = getLastItem(location.pathname);
    getEntities(id).then(setEntities).catch(handleError);
  }, [location.pathname]);

  function handleError(err) {
    setErrorState({ hasErrors: true, message: err.message });
  }

  return (
    <>    
      <h2>Entities</h2>
        {errorState.hasErrors ?
          <div>{errorState.message}</div>
            : entities ? 
            <CustomTable 
              headers={getObjectKeys(entities.length && entities[0])}
              data={entities}
              contextmenu={true}/>
            : 
            <RenderLoader text={"Wait I'm loading entities for you"}/>
        }    
    </>
  );
}

export default EntitiesPage;
