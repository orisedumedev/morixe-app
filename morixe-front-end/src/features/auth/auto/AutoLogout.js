import { authService } from "@/features/auth/services";

export default function autoLogout() {
  authService.clearAuth();

  window.location.replace("/login");
}