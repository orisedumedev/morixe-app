import authService from "@/features/auth/services/authService";

export async function logout(navigate) {
  try {
    await authService.logout();
  } finally {
    navigate("/login", {
      replace: true,
    });
  }
}

export function openProfile(navigate) {
  navigate("/profile");
}

export function openSettings(navigate) {
  navigate("/settings");
}

//export function openNotifications() {}

//export function openHelp() {}

//export function openWallet() {}

//export function openTradingHistory() {}