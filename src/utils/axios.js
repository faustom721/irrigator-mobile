import axios from 'axios';

const BACKEND_HOST = 'http://10.0.2.2:8000';

export const axiosInstance = axios.create({
  baseURL: BACKEND_HOST,
});

export const setHeaders = (token) => {
  if (token) {
    Object.assign(axiosInstance.defaults, {
      headers: { authorization: `Bearer ${token}` },
    });
  } else {
    Object.assign(axiosInstance.defaults, { headers: { authorization: '' } });
  }
};
