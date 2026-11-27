import {
  MarketSidebar,
  MarketStats,
  MarketSearch,
  MarketFilters,
  MarketTable,
} from "../../components";

import { useMarkets } from "../../hooks";

const Markets = () => {
  const {
    loading,

    // Sidebar
    sidebarMarkets,
    sidebarSearch,
    setSidebarSearch,

    // Table
    tableMarkets,
    tableSearch,
    setTableSearch,

    // Selected Market
    selectedMarket,
    setSelectedMarket,
  } = useMarkets();

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-white">
          Markets
        </h1>

        <p className="mt-1 text-slate-400">
          Explore cryptocurrency market data and track live prices.
        </p>
      </div>

      {/* Main Layout */}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* Sidebar */}

        <div className="xl:col-span-2">

          <MarketSidebar
            loading={loading}
            search={sidebarSearch}
            onSearchChange={setSidebarSearch}
            markets={sidebarMarkets}
            selectedMarket={selectedMarket}
            onSelectMarket={setSelectedMarket}
          />

        </div>

        {/* Main Content */}

        <div className="xl:col-span-10 space-y-6">

          {/* Statistics */}

          <MarketStats
            markets={tableMarkets}
            loading={loading}
          />

          {/* Table Search */}

          <MarketSearch
            value={tableSearch}
            onChange={setTableSearch}
          />

          {/* Filters */}

          <MarketFilters />

          {/* Market Table */}

          <MarketTable
            markets={tableMarkets}
            loading={loading}
            selectedMarket={selectedMarket}
            onSelectMarket={setSelectedMarket}
          />

        </div>

      </div>

    </div>
  );
};

export default Markets;