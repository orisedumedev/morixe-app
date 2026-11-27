const walletData = {
  summary: {
    totalBalance: 124587.43,
    portfolioValue: 118954.12,
    availableBalance: 5633.31,
    pnl24h: 4.28,
  },

  assets: [
    {
      id: 1,
      symbol: "BTC",
      name: "Bitcoin",
      logo: "/assets/coins/btc.svg",
      amount: 1.2456,
      price: 68452.18,
      value: 85243.44,
      allocation: 68.4,
      change24h: 2.35,
    },
    {
      id: 2,
      symbol: "ETH",
      name: "Ethereum",
      logo: "/assets/coins/eth.svg",
      amount: 8.12,
      price: 3524.18,
      value: 28614.34,
      allocation: 22.9,
      change24h: -1.42,
    },
    {
      id: 3,
      symbol: "SOL",
      name: "Solana",
      logo: "/assets/coins/sol.svg",
      amount: 42.8,
      price: 165.82,
      value: 7099.10,
      allocation: 5.7,
      change24h: 5.84,
    },
    {
      id: 4,
      symbol: "BNB",
      name: "BNB",
      logo: "/assets/coins/bnb.svg",
      amount: 6.25,
      price: 598.44,
      value: 3740.25,
      allocation: 3.0,
      change24h: 0.92,
    },
  ],

  transactions: [
    {
      id: 1,
      type: "Deposit",
      asset: "USDT",
      amount: 5000,
      status: "Completed",
      date: "2025-07-01 10:24",
    },
    {
      id: 2,
      type: "Buy",
      asset: "BTC",
      amount: 0.25,
      status: "Completed",
      date: "2025-07-03 14:12",
    },
    {
      id: 3,
      type: "Sell",
      asset: "ETH",
      amount: 1.5,
      status: "Completed",
      date: "2025-07-05 08:35",
    },
  ],
};

export default walletData;