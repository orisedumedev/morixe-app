import { useEffect } from "react";

import { useAuth } from "@/features/auth/context";
import {
  authStorage,
  tokenStorage,
} from "@/features/auth/storage";

export default function AutoLogin() {
  const { login } = useAuth();

  useEffect(() => {
    const accessToken =
      tokenStorage.getAccessToken();

    const user =
      authStorage.getUser();

    if (accessToken && user) {
      login(user, accessToken);
    }
  }, [login]);

  return null;
}