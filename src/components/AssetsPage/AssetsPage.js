import React, { useState, useEffect } from 'react';
import { getAssets } from "../../services/assets";

function AssetsPage() {
  const [assets, setAssets] = useState([]);
  const [errorState, setErrorState] = useState({ hasErrors: false });

  useEffect(() => {
    getAssets().then(setAssets).catch(handleError);
  }, []);

  function handleError(err) {
    setErrorState({ hasErrors: true, message: err.message });
  }

  return (
    <div>
        <h2>Assets</h2>
        {errorState.hasErrors && <div>{errorState.message}</div>}
        <section>
          {assets && assets.map((item) => (
            <article key={item.id}>{item.t_street_name}</article>
          ))}
        </section>
    </div>
  );
}

export default AssetsPage;
