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


// Handle HTTP Error
function handleError(status) {
    if (status === 500) {
      throw new ServerError();
    }

    if (status === 404) {
        throw new NotFoundError();
      }
  }
  
// Create an error for the Network error
export class NetworkError extends Error {
    constructor() {
      super("There was a network error. Please try again in a few seconds.");
    }
}

// Create an error for the Server error
export class ServerError extends Error {
    constructor() {
      super("There was a server error.");
    }
  }

// Create an error for the not found error
export class NotFoundError extends Error {
    constructor() {
      super('The requested resource was a not found.');
    }
  }
