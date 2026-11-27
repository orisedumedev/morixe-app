import {
  DepositAssetSelector,
  DepositNetworkSelector,
  DepositAddressCard,
  DepositQRCode,
  DepositInstructions,
  DepositHistory,
} from "../../components";

import { useDeposit } from "../../hooks";

const Deposit = () => {
  const {
    loading,

    history,

    filteredAssets,

    search,
    setSearch,

    selectedAsset,
    setSelectedAsset,

    selectedNetwork,
    setSelectedNetwork,

    depositAddress,

    qrCode,

    minimumDeposit,

    requiredConfirmations,
  } = useDeposit();

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-white">
          Deposit
        </h1>

        <p className="mt-1 text-slate-400">
          Deposit cryptocurrency safely into your wallet.
        </p>

      </div>

      {/* Asset */}

      <DepositAssetSelector
        assets={filteredAssets}
        value={selectedAsset}
        onChange={setSelectedAsset}
        search={search}
        onSearchChange={setSearch}
      />

      {/* Network */}

      {selectedAsset && (
        <DepositNetworkSelector
          networks={selectedAsset.networks}
          value={selectedNetwork}
          onChange={setSelectedNetwork}
        />
      )}

      {/* Main Layout */}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* Left */}

        <div className="xl:col-span-8 space-y-6">

          <DepositAddressCard
            asset={selectedAsset}
            network={selectedNetwork}
            address={depositAddress}
            minimumDeposit={minimumDeposit}
            confirmations={requiredConfirmations}
          />

          <DepositInstructions
            asset={selectedAsset}
            network={selectedNetwork}
            minimumDeposit={minimumDeposit}
            confirmations={requiredConfirmations}
          />

        </div>

        {/* Right */}

        <div className="xl:col-span-4">

          <DepositQRCode
            asset={selectedAsset}
            network={selectedNetwork}
            qrCode={qrCode}
            address={depositAddress}
          />

        </div>

      </div>

      {/* History */}

      <DepositHistory
        history={history}
        loading={loading}
      />

    </div>
  );
};

export default Deposit;