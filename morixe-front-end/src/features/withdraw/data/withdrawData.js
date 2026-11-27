const withdrawData = {
  assets: [
    {
      id: 1,
      symbol: "BTC",
      name: "Bitcoin",

      networks: [
        "Bitcoin",
      ],

      walletBalance: 0.52318472,

      minimumWithdrawal: {
        Bitcoin: 0.0005,
      },

      withdrawalFee: {
        Bitcoin: 0.0002,
      },
    },

    {
      id: 2,
      symbol: "ETH",
      name: "Ethereum",

      networks: [
        "ERC20",
        "Arbitrum",
      ],

      walletBalance: 8.652,

      minimumWithdrawal: {
        ERC20: 0.005,
        Arbitrum: 0.001,
      },

      withdrawalFee: {
        ERC20: 0.002,
        Arbitrum: 0.0005,
      },
    },

    {
      id: 3,
      symbol: "USDT",
      name: "Tether",

      networks: [
        "ERC20",
        "TRC20",
        "BEP20",
        "Polygon",
      ],

      walletBalance: 12548.75,

      minimumWithdrawal: {
        ERC20: 25,
        TRC20: 5,
        BEP20: 2,
        Polygon: 2,
      },

      withdrawalFee: {
        ERC20: 15,
        TRC20: 1,
        BEP20: 0.5,
        Polygon: 0.25,
      },
    },

    {
      id: 4,
      symbol: "SOL",
      name: "Solana",

      networks: [
        "Solana",
      ],

      walletBalance: 320.45,

      minimumWithdrawal: {
        Solana: 0.02,
      },

      withdrawalFee: {
        Solana: 0.005,
      },
    },
  ],

  history: [
    {
      id: 1,
      asset: "BTC",
      amount: "0.025 BTC",
      network: "Bitcoin",
      address:
        "bc1q9z63f8...6kn2e7",

      fee: "0.0002 BTC",

      status: "Completed",

      txId:
        "91ac5f89abde7b214e9dfb43...",

      date:
        "2025-07-06 14:25",
    },

    {
      id: 2,
      asset: "USDT",
      amount: "500 USDT",
      network: "TRC20",

      address:
        "TH4hMf8V6...M7sN4F",

      fee: "1 USDT",

      status: "Pending",

      txId:
        "1b7f0ab8d3349fe...",

      date:
        "2025-07-08 09:12",
    },
  ],
};

export default withdrawData;