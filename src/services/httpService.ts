import axios from 'axios';
import { authStore } from '../store/authStore';

export const DATA_PATH = 'https://dev.enmon.tech';

const defaultHeaders = {
  Authorization: '',
};

export const httpService = axios.create({
  headers: defaultHeaders,
});

// // Request Interceptor
httpService.interceptors.request.use(
  (config) => {
    const accessToken = authStore.getState().authorization;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
