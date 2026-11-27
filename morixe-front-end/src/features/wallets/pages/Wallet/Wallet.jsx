import {
  WalletBalanceCard,
  PortfolioValueCard,
  WalletStats,
  WalletChart,
  WalletAssetList,
  DepositWithdrawCard,
  WalletTransactions,
} from "../../components";

import { useWallet } from "../../hooks";

const Wallet = () => {
  const {
    loading,

    summary,

    filteredAssets,

    transactions,

    assetSearch,
    setAssetSearch,

    selectedAsset,
    setSelectedAsset,
  } = useWallet();

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-white">
          Wallet
        </h1>

        <p className="mt-1 text-slate-400">
          Manage your crypto assets and portfolio.
        </p>

      </div>

      {/* Summary */}

      {summary && (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          <WalletBalanceCard
            balance={summary.totalBalance}
            available={summary.availableBalance}
          />

          <PortfolioValueCard
            value={summary.portfolioValue}
            change={summary.pnl24h}
          />

          <WalletStats
            summary={summary}
          />

        </div>
      )}

      {/* Portfolio Chart */}

      <WalletChart
        loading={loading}
      />

      {/* Assets + Actions */}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* Assets */}

        <div className="xl:col-span-8">

          <WalletAssetList
            assets={filteredAssets}
            loading={loading}

            search={assetSearch}
            onSearchChange={setAssetSearch}

            selectedAsset={selectedAsset}
            onSelectAsset={setSelectedAsset}
          />

        </div>

        {/* Wallet Actions */}

        <div className="xl:col-span-4">

          <DepositWithdrawCard
            onDeposit={() =>
              console.log("Deposit")
            }

            onWithdraw={() =>
              console.log("Withdraw")
            }

            onTransfer={() =>
              console.log("Transfer")
            }

            onReceive={() =>
              console.log("Receive")
            }
          />

        </div>

      </div>

      {/* Transaction History */}

      <WalletTransactions
        transactions={transactions}
        loading={loading}
      />

    </div>
  );
};

export default Wallet;