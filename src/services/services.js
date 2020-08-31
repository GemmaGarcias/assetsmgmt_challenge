import { NetworkError, ServerError, NotFoundError } from './errors';

export async function getAssets() {
    try {
        const response = await fetch("https://6y458uslg3.execute-api.eu-west-3.amazonaws.com/elixos/assets");
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

export async function getEntities() {
  try {
      const response = await fetch("https://6y458uslg3.execute-api.eu-west-3.amazonaws.com/elixos/entities");
      if (!response.ok) {
          return handleError(response.status);
      }
      const { entities } = await response.json();
      return entities;
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
