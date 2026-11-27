import {
  WithdrawAssetSelector,
  WithdrawNetworkSelector,
  WithdrawAddressInput,
  WithdrawAmountInput,
  WithdrawFeeCard,
  WithdrawSummary,
  WithdrawSubmitButton,
  WithdrawInstructions,
  WithdrawHistory,
} from "@/features/withdraw/components";

import { useWithdraw } from "../hooks";

const Withdraw = () => {
  const {
    loading,

    filteredAssets,

    history,

    search,
    setSearch,

    selectedAsset,
    setSelectedAsset,

    selectedNetwork,
    setSelectedNetwork,

    address,
    setAddress,

    amount,
    setAmount,

    walletBalance,

    minimumWithdrawal,

    withdrawalFee,

    totalDeducted,

    receiveAmount,

    validationError,

    canWithdraw,
  } = useWithdraw();

  const handleWithdraw = () => {
    console.log({
      asset: selectedAsset?.symbol,
      network: selectedNetwork,
      address,
      amount,
    });

    // Future:
    // await withdrawService.createWithdrawal(...)
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-white">
          Withdraw Crypto
        </h1>

        <p className="mt-1 text-slate-400">
          Withdraw cryptocurrency securely to
          an external wallet.
        </p>

      </div>

      {/* Main Layout */}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* Left */}

        <div className="xl:col-span-8 space-y-6">

          <WithdrawAssetSelector
            assets={filteredAssets}
            value={selectedAsset}
            onChange={setSelectedAsset}
            search={search}
            onSearchChange={setSearch}
          />

          <WithdrawNetworkSelector
            asset={selectedAsset}
            value={selectedNetwork}
            onChange={setSelectedNetwork}
          />

          <WithdrawAddressInput
            value={address}
            onChange={setAddress}
          />

          <WithdrawAmountInput
            asset={selectedAsset}
            value={amount}
            onChange={setAmount}
            walletBalance={walletBalance}
            minimumWithdrawal={minimumWithdrawal}
          />

          <WithdrawInstructions
            asset={selectedAsset}
            network={selectedNetwork}
            minimumWithdrawal={minimumWithdrawal}
            withdrawalFee={withdrawalFee}
          />

        </div>

        {/* Right */}

        <div className="xl:col-span-4 space-y-6">

          <WithdrawFeeCard
            asset={selectedAsset}
            walletBalance={walletBalance}
            amount={amount}
            withdrawalFee={withdrawalFee}
            receiveAmount={receiveAmount}
          />

          <WithdrawSummary
            asset={selectedAsset}
            network={selectedNetwork}
            address={address}
            amount={amount}
            withdrawalFee={withdrawalFee}
            totalDeducted={totalDeducted}
            receiveAmount={receiveAmount}
          />

          <WithdrawSubmitButton
            loading={loading}
            canWithdraw={canWithdraw}
            validationError={validationError}
            onSubmit={handleWithdraw}
          />

        </div>

      </div>

      {/* Withdrawal History */}

      <WithdrawHistory
        history={history}
        loading={loading}
      />

    </div>
  );
};

export default Withdraw;