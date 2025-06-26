const DEV_URL = '';
const API_URL = '/api/';

export const BASE_URL =
  (process.env.NODE_ENV === 'development' ? DEV_URL : window.location.origin) +
  API_URL;
