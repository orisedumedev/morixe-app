const profileData = {
  user: {
    id: "USR-10293847",

    firstName: "John",

    lastName: "Doe",

    username: "johndoe",

    email: "john.doe@example.com",

    phone: "+1 (555) 123-4567",

    country: "United States",

    city: "New York",

    dateJoined: "2023-04-18",

    avatar: "/images/avatar.png",

    bio: "Cryptocurrency investor and blockchain enthusiast.",

    level: "Verified",
  },

  statistics: {
    portfolioValue: 128540.82,

    totalTransactions: 287,

    totalDeposits: 62,

    totalWithdrawals: 31,

    completedTrades: 194,
  },

  security: {
    emailVerified: true,

    phoneVerified: true,

    twoFactorEnabled: true,

    kycVerified: true,

    lastPasswordChange: "2025-06-28",
  },

  preferences: {
    language: "English",

    currency: "USD",

    timezone: "UTC-5",

    theme: "Dark",

    emailNotifications: true,

    smsNotifications: false,
  },

  activity: [
    {
      id: 1,
      action: "Logged In",
      description: "Successful login from Chrome",
      date: "2025-07-09 08:25",
    },
    {
      id: 2,
      action: "Deposit",
      description: "Deposited 0.50 BTC",
      date: "2025-07-08 14:11",
    },
    {
      id: 3,
      action: "Trade",
      description: "Bought 3.2 ETH",
      date: "2025-07-07 18:42",
    },
    {
      id: 4,
      action: "Withdrawal",
      description: "Withdrawn 500 USDT",
      date: "2025-07-06 11:17",
    },
  ],

  verification: {
    identity: true,

    address: true,

    facialRecognition: true,
  },
};

export default profileData;