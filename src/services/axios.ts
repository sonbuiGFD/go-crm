import axios, { AxiosInstance } from 'axios';
import { message } from 'antd';

import { getUserInfo, handleLogout } from 'utils/storage';
import { BASE_URL } from 'utils/constants';

const publicUrl: string[] = ['/api/login', '/api/register'];
const apiNotShowError: string[] = [];

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 200000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async function (config: any) {
    if (publicUrl.includes(config?.url)) {
      return config;
    }

    const { token } = getUserInfo();
    if (!token) {
      // TODO: handle relogin
    }
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  async (response: any) => {
    return response;
  },
  async (err: any) => {
    if (axios.isCancel(err)) {
      return Promise.reject(err);
    }

    const originalConfig = err.config;
    if (err.response.status === 401 || err.response.status === 403) {
      // const userInfo = getUserInfo();
      // const { refreshToken } = userInfo;
      try {
        //TODO: refresh token
        // return axiosInstance(originalConfig);
      } catch (_error) {
        // clearSession
        //Todo: redirect to login
      }
      handleLogout();
    }

    // handle hide toast error on some api
    const apiUrl = originalConfig?.url;
    const checkoutShowError = apiNotShowError.filter(item => apiUrl.includes(item));

    if (navigator.onLine && !checkoutShowError.length) {
      message.error('Something went wrong.');
    }
    return Promise.reject(err);
  },
);

export const modelsAxios: AxiosInstance = axios.create({
  baseURL: `https://civitai.com`,
  timeout: 200000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
