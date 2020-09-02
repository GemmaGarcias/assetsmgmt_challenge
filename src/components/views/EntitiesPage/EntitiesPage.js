import React, { useState, useEffect } from 'react';
import { getEntities } from "../../../services/services";
import RenderLoader from '../../common/RenderLoader/RenderLoader';
import CustomTable from '../../common/CustomTable/CustomTable';

function EntitiesPage() {
  const [entities, setEntities] = useState();
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

  return (
    <>    
      <h2>Entities</h2>
        {errorState.hasErrors ?
         <div>{errorState.message}</div>
         : entities ? 
          <CustomTable 
            headers={getObjectKeys(entities.length && entities[0])}
            data={entities}/>
          : 
          <RenderLoader text={"Wait I'm loading entities for you"}/>
        }    
    </>
  );
}

export default EntitiesPage;