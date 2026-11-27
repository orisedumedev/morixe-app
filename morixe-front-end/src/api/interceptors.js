import api from "./axiosClient";

import { tokenStorage } from "@/features/auth/storage";

import { refreshAccessToken } from "@/features/auth/auto";

import autoLogout from "@/features/auth/auto/AutoLogout";


// REQUEST INTERCEPTOR

api.interceptors.request.use(
  (config) => {
    const token =
      tokenStorage.getAccessToken();

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error)
);


// RESPONSE INTERCEPTOR

api.interceptors.response.use(

  (response) => response,

  async (error) => {

    const originalRequest =
      error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {

      originalRequest._retry = true;

      try {

        const newToken =
          await refreshAccessToken();

        originalRequest.headers.Authorization =
          `Bearer ${newToken}`;

        return api(originalRequest);

      }

      catch {

        autoLogout();

      }

    }

    return Promise.reject(error);

  }

);

export default api;