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
