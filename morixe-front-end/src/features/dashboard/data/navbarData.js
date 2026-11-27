const navbarData = {
  user: {
    id: 1,
    name: "Michigan Egbuzie",
    email: "michigan@example.com",
    role: "Verified Trader",
    avatar: "",
  },

  notifications: [
    {
      id: 1,
      title: "Deposit Successful",
      message: "Your BTC deposit has been confirmed.",
      read: false,
      time: "2 mins ago",
    },
    {
      id: 2,
      title: "Withdrawal Completed",
      message: "Your USDT withdrawal was completed.",
      read: false,
      time: "15 mins ago",
    },
    {
      id: 3,
      title: "Security Alert",
      message: "A new login was detected.",
      read: true,
      time: "Yesterday",
    },
  ],

  markets: [
    {
      symbol: "BTC",
      price: 65423.71,
      change: 2.48,
    },
    {
      symbol: "ETH",
      price: 3487.52,
      change: -0.81,
    },
    {
      symbol: "SOL",
      price: 152.36,
      change: 4.91,
    },
  ],

  languages: [
    "English",
    "French",
    "Spanish",
  ],

  themes: [
    "Dark",
    "Light",
  ],
};

export default navbarData;