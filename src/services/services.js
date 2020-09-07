import { NetworkError, ServerError, NotFoundError } from './errors';

const BASE_URL="https://cors-anywhere.herokuapp.com/https://6y458uslg3.execute-api.eu-west-3.amazonaws.com/elixos";

export async function getAssets() {
    try {
        const response = await fetch(`${BASE_URL}/assets`);
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
      const response = await fetch(`${BASE_URL}/entities`);
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
