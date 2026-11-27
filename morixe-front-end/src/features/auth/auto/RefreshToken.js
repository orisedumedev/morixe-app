import { authService } from "@/features/auth/services";

let refreshPromise = null;

export async function refreshAccessToken() {
  if (!refreshPromise) {
    refreshPromise = authService
      .refreshToken()
      .finally(() => {
        refreshPromise = null;
      });
  }

  const data = await refreshPromise;

  return data.accessToken;
}