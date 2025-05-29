export const API_URL: string = (() => {
  if (typeof process.env.API_URL !== 'undefined') {
    return process.env.API_URL as string;
  }

  if (process.env.NODE_ENV === 'development') {
    console.warn('API_URL environment variable not set. Falling back to localhost for development.');
    return 'http://localhost:3005/api';
  }

  throw new Error('API_URL is not defined in production environment!');
})();

// export const API_URL =  "https://backendcarrent.onrender.com/api"

// https://backendcarrent.onrender.com
// https://backendcarrent.onrender.com/api

//"http://localhost:3005/api"