import axiosInstance from './axios';

// ========== SERVICE SETUP ==========

export const getUserProfile = () => {
  return axiosInstance.get(`/api/user/info`);
};

export const login = (payload: any) => {
  return axiosInstance.post(`/api/login`, payload);
};

export const register = (payload: any) => {
  return axiosInstance.post(`/api/register`, payload);
};
