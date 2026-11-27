const notificationData = {
  notifications: [
    {
      id: 1,
      type: "Trading",
      title: "Buy Order Executed",
      message:
        "Your BTC/USDT buy order has been executed successfully.",
      date: "2025-07-10 09:15",
      read: false,
      priority: "high",
    },
    {
      id: 2,
      type: "Wallet",
      title: "Deposit Confirmed",
      message:
        "Your deposit of 0.25 BTC has been confirmed.",
      date: "2025-07-09 18:45",
      read: true,
      priority: "normal",
    },
    {
      id: 3,
      type: "Security",
      title: "New Login Detected",
      message:
        "A login from a new device was detected.",
      date: "2025-07-09 11:30",
      read: false,
      priority: "high",
    },
    {
      id: 4,
      type: "System",
      title: "Maintenance Notice",
      message:
        "Scheduled maintenance will begin tomorrow at 02:00 UTC.",
      date: "2025-07-08 16:20",
      read: true,
      priority: "normal",
    },
    {
      id: 5,
      type: "Trading",
      title: "Price Alert",
      message:
        "Ethereum has reached your target price.",
      date: "2025-07-08 08:10",
      read: false,
      priority: "normal",
    },
    {
      id: 6,
      type: "Wallet",
      title: "Withdrawal Completed",
      message:
        "Your USDT withdrawal has been completed.",
      date: "2025-07-07 13:55",
      read: true,
      priority: "normal",
    },
  ],

  filters: [
    "All",
    "Unread",
    "Read",
    "Trading",
    "Wallet",
    "Security",
    "System",
  ],
};

export default notificationData;