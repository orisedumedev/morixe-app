const notificationData = [
  {
    id: 1,
    type: "success",
    title: "Buy Order Filled",
    message: "Your BTC buy order has been executed successfully.",
    time: "2 min ago",
    read: false,
  },
  {
    id: 2,
    type: "info",
    title: "Deposit Received",
    message: "10,000 USDT has been credited to your wallet.",
    time: "15 min ago",
    read: false,
  },
  {
    id: 3,
    type: "warning",
    title: "Price Alert",
    message: "Ethereum has crossed $3,600.",
    time: "1 hour ago",
    read: true,
  },
  {
    id: 4,
    type: "error",
    title: "Withdrawal Failed",
    message: "Your BTC withdrawal could not be processed.",
    time: "3 hours ago",
    read: true,
  },
];

export default notificationData;