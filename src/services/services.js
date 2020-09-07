import { NetworkError, ServerError, NotFoundError } from './errors';

export async function getAssets() {
    try {
        const response = await fetch(`/assets`);
        if (!response.ok) {
            return handleError(response.status);
        }
        const { assets } = await response.json();
        return assets;
    } catch (err) {
        if (err instanceof ServerError || err instanceof NotFoundError) {
            throw err;
          }
        throw new NetworkError();
    }
}

export async function getEntities(lastParam) {
  try {
      const response = await fetch(`/entities`);
      if (!response.ok) {
          return handleError(response.status);
      }
      const { entities } = await response.json();
      if(lastParam === 'entities') {
        return entities;
      } else { 
        return entities.filter(item => item.id_asset === parseInt(lastParam)); }
     
  } catch (err) {
      if (err instanceof ServerError || err instanceof NotFoundError) {
          throw err;
        }
      throw new NetworkError();
  }
}


// Handle HTTP Error
function handleError(status) {
  if (status === 500) {
    throw new ServerError();
  }

  if (status === 404) {
      throw new NotFoundError();
    }
}
