import { NetworkError, ServerError, NotFoundError } from './errors';

const baseURL = process.env.REACT_APP_API;

export async function getAssets() {
  console.log(baseURL)
    try {
        const response = await fetch(`/assets`, {
          mode: 'no-cors'
        });
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
      const response = await fetch(`/entities`);
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
