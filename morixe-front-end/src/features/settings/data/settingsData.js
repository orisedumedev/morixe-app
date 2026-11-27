const settingsData = {
  general: {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    country: "United States",
    city: "New York",
  },

  security: {
    emailVerified: true,
    phoneVerified: true,
    twoFactorEnabled: true,
    kycVerified: true,
    lastPasswordChange: "2025-06-28",
  },

  notifications: {
    email: true,
    sms: false,
    push: true,
    marketing: false,
  },

  appearance: {
    theme: "Dark",
  },

  language: {
    current: "English",

    available: [
      "English",
      "French",
      "Spanish",
      "German",
      "Japanese",
      "Chinese",
    ],
  },

  currency: {
    current: "USD",

    available: [
      "USD",
      "EUR",
      "GBP",
      "JPY",
      "BTC",
      "ETH",
    ],
  },

  password: {
    lastUpdated: "2025-06-28",
  },
};

export default settingsData;