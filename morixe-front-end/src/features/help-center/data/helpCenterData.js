const helpCenterData = {
  categories: [
    {
      id: 1,
      name: "Account",
      description: "Account management and profile settings.",
      icon: "User",
      articles: 12,
    },
    {
      id: 2,
      name: "Wallet",
      description: "Deposits, withdrawals and balances.",
      icon: "Wallet",
      articles: 18,
    },
    {
      id: 3,
      name: "Trading",
      description: "Spot, futures and trading guides.",
      icon: "CandlestickChart",
      articles: 24,
    },
    {
      id: 4,
      name: "Security",
      description: "2FA, passwords and account protection.",
      icon: "Shield",
      articles: 10,
    },
    {
      id: 5,
      name: "Verification",
      description: "Identity verification (KYC).",
      icon: "BadgeCheck",
      articles: 8,
    },
    {
      id: 6,
      name: "API",
      description: "API documentation and integration.",
      icon: "Code2",
      articles: 14,
    },
  ],

  articles: [
    {
      id: 1,
      category: "Trading",
      title: "How to Place Your First Trade",
      description:
        "Learn how to place buy and sell orders using the trading interface.",
      views: 5230,
      popular: true,
    },
    {
      id: 2,
      category: "Wallet",
      title: "How to Deposit Cryptocurrency",
      description:
        "Step-by-step guide for depositing digital assets.",
      views: 4187,
      popular: true,
    },
    {
      id: 3,
      category: "Wallet",
      title: "How to Withdraw Funds",
      description:
        "Learn how to safely withdraw your crypto assets.",
      views: 3954,
      popular: false,
    },
    {
      id: 4,
      category: "Security",
      title: "Enable Two-Factor Authentication",
      description:
        "Protect your account with Google Authenticator.",
      views: 6420,
      popular: true,
    },
    {
      id: 5,
      category: "Verification",
      title: "Complete Identity Verification",
      description:
        "How to complete KYC verification successfully.",
      views: 2805,
      popular: false,
    },
  ],

  faqs: [
    {
      id: 1,
      question: "How long do deposits take?",
      answer:
        "Deposit confirmation time depends on the blockchain network and required confirmations.",
    },
    {
      id: 2,
      question: "Why is my withdrawal pending?",
      answer:
        "Withdrawals may require security review or blockchain confirmations.",
    },
    {
      id: 3,
      question: "How do I reset my password?",
      answer:
        "Go to Settings → Password and follow the password reset process.",
    },
    {
      id: 4,
      question: "How do I enable 2FA?",
      answer:
        "Navigate to Settings → Security and enable Google Authenticator.",
    },
  ],

  quickLinks: [
    {
      id: 1,
      title: "Terms of Service",
      href: "/terms",
    },
    {
      id: 2,
      title: "Privacy Policy",
      href: "/privacy",
    },
    {
      id: 3,
      title: "Trading Fees",
      href: "/fees",
    },
    {
      id: 4,
      title: "API Documentation",
      href: "/api-docs",
    },
  ],

  support: {
    email: "support@morixe.com",
    liveChat: true,
    submitTicket: true,
  },
};

export default helpCenterData;