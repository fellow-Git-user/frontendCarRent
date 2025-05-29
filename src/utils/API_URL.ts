export const API_URL: string = (() => {
  if (typeof import.meta.env.VITE_API_URL !== 'undefined') {
    return import.meta.env.VITE_API_URL as string;
  }

  if (import.meta.env.DEV) {
    console.warn('VITE_API_URL environment variable not set. Falling back to localhost for development.');
    return 'http://localhost:3005/api';
  }

  throw new Error('VITE_API_URL is not defined in production environment!');
})();

// export const API_URL =  "https://backendcarrent.onrender.com/api"

// https://backendcarrent.onrender.com
// https://backendcarrent.onrender.com/api

//"http://localhost:3005/api"