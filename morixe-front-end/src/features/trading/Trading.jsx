import {
  TradingPairList,
  TradingChart,
  OrderBook,
  RecentTrades,
  BuySellPanel,
} from "./components";

import { useTrading } from "./hooks";

const Trading = () => {
  const {
    loading,

    // Trading Pairs
    tradingPairs,
    search,
    setSearch,

    // Selected Pair
    selectedPair,
    setSelectedPair,

    // Trading Data
    chartData,
    orderBook,
    recentTrades,

    // Wallet
    wallet,

    // Actions
    placeOrder,
  } = useTrading();

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-white">
          Spot Trading
        </h1>

        <p className="mt-1 text-slate-400">
          Trade cryptocurrencies in real time.
        </p>
      </div>

      {/* Trading Layout */}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left Sidebar */}

        <div className="xl:col-span-2">
          <TradingPairList
            loading={loading}
            search={search}
            onSearchChange={setSearch}
            pairs={tradingPairs}
            value={selectedPair}
            onChange={setSelectedPair}
          />
        </div>

        {/* Center */}

        <div className="xl:col-span-7 space-y-6">
          <TradingChart
            symbol={selectedPair}
            data={chartData}
            loading={loading}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <OrderBook
              orders={orderBook}
              loading={loading}
            />

            <RecentTrades
              trades={recentTrades}
              loading={loading}
            />
          </div>
        </div>

        {/* Right */}

        <div className="xl:col-span-3">
          <BuySellPanel
            symbol={selectedPair}
            wallet={wallet}
            loading={loading}
            onSubmit={placeOrder}
          />
        </div>
      </div>
    </div>
  );
};

export default Trading;