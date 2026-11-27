const depositData = {
  assets: [
    {
      id: 1,
      symbol: "BTC",
      name: "Bitcoin",
      logo: "/assets/coins/btc.png",

      networks: ["Bitcoin"],

      addresses: {
        Bitcoin:
          "bc1q7u5u4j2l9q4x6n9k0d5z7f3y8w1c5m8k7v2r5x",
      },

      minimumDeposits: {
        Bitcoin: "0.0001 BTC",
      },

      confirmations: {
        Bitcoin: 2,
      },

      qrCodes: {
        Bitcoin: "/assets/qrcodes/btc.png",
      },
    },

    {
      id: 2,
      symbol: "ETH",
      name: "Ethereum",
      logo: "/assets/coins/eth.png",

      networks: [
        "ERC20",
        "Arbitrum",
        "Optimism",
      ],

      addresses: {
        ERC20:
          "0x4A7F3B76D1A6C75F2A84D2A4A95F4F91D8B0F456",

        Arbitrum:
          "0x4A7F3B76D1A6C75F2A84D2A4A95F4F91D8B0F456",

        Optimism:
          "0x4A7F3B76D1A6C75F2A84D2A4A95F4F91D8B0F456",
      },

      minimumDeposits: {
        ERC20: "0.001 ETH",
        Arbitrum: "0.001 ETH",
        Optimism: "0.001 ETH",
      },

      confirmations: {
        ERC20: 12,
        Arbitrum: 20,
        Optimism: 20,
      },

      qrCodes: {
        ERC20: "/assets/qrcodes/eth.png",
        Arbitrum: "/assets/qrcodes/eth.png",
        Optimism: "/assets/qrcodes/eth.png",
      },
    },

    {
      id: 3,
      symbol: "USDT",
      name: "Tether",
      logo: "/assets/coins/usdt.png",

      networks: [
        "ERC20",
        "TRC20",
        "BEP20",
        "Polygon",
        "Arbitrum",
      ],

      addresses: {
        ERC20:
          "0x5B8A2F97A54B782FDD65491C9E3E8A8E4A7C9F54",

        TRC20:
          "TH4hMf8V6eYQ5oRPLnA8gM2v4aJ8M7sN4F",

        BEP20:
          "0x8C72D7C6F8C1AA54D2A4A95F4F91D8B0F4569876",

        Polygon:
          "0x9B8D27D5C41AAB654D2A4A95F4F91D8B0F451234",

        Arbitrum:
          "0x2F81A98C654AAB654D2A4A95F4F91D8B0F459876",
      },

      minimumDeposits: {
        ERC20: "10 USDT",
        TRC20: "1 USDT",
        BEP20: "5 USDT",
        Polygon: "1 USDT",
        Arbitrum: "1 USDT",
      },

      confirmations: {
        ERC20: 12,
        TRC20: 20,
        BEP20: 15,
        Polygon: 100,
        Arbitrum: 20,
      },

      qrCodes: {
        ERC20: "/assets/qrcodes/usdt.png",
        TRC20: "/assets/qrcodes/usdt.png",
        BEP20: "/assets/qrcodes/usdt.png",
        Polygon: "/assets/qrcodes/usdt.png",
        Arbitrum: "/assets/qrcodes/usdt.png",
      },
    },

    {
      id: 4,
      symbol: "SOL",
      name: "Solana",
      logo: "/assets/coins/sol.png",

      networks: ["Solana"],

      addresses: {
        Solana:
          "7fM5AkLpRQh4k8zGc5r2r9vNv5QkMvQBtL6pTqR5vKzM",
      },

      minimumDeposits: {
        Solana: "0.01 SOL",
      },

      confirmations: {
        Solana: 32,
      },

      qrCodes: {
        Solana: "/assets/qrcodes/sol.png",
      },
    },
  ],

  history: [
    {
      id: 1,
      asset: "BTC",
      amount: "0.015 BTC",
      network: "Bitcoin",
      status: "Completed",
      txId: "8f4f2e8ab71c34b9...",
      date: "2025-07-02 14:15",
    },
    {
      id: 2,
      asset: "USDT",
      amount: "500 USDT",
      network: "TRC20",
      status: "Pending",
      txId: "74bb8cd3eac99841...",
      date: "2025-07-05 10:42",
    },
    {
      id: 3,
      asset: "ETH",
      amount: "2.50 ETH",
      network: "ERC20",
      status: "Completed",
      txId: "0xa76d2f65fba14587...",
      date: "2025-07-07 09:18",
    },
  ],
};

export default depositData;