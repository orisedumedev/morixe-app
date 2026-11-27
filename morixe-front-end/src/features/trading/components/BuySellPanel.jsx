import { useMemo, useState } from "react";

import OrderTypeTabs from "./OrderTypeTabs";
import OrderInput from "./OrderInput";
import QuickAmountSelector from "./QuickAmountSelector";
import OrderSummary from "./OrderSummary";
import SubmitOrderButton from "./SubmitOrderButton";
import TradeSideTabs from "./TradeSideTabs";

const BuySellPanel = ({
  symbol = "BTC/USDT",
  wallet = {},
  loading = false,
  onSubmit,
}) => {
  const {
    asset = "USDT",
    available = 0,
  } = wallet;

  const [side, setSide] =
    useState("BUY");

  const [orderType, setOrderType] =
    useState("MARKET");

  const [selectedPercentage, setSelectedPercentage] =
    useState(0);

  const [form, setForm] = useState({
    price: "",
    amount: "",
  });

  const handleChange =
    (field) => (e) => {
      setForm((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));

      setSelectedPercentage(0);
    };

  const handlePercentageChange = (
    percentage
  ) => {
    setSelectedPercentage(
      percentage
    );

    let amount = "";

    if (orderType === "MARKET") {
      amount = (
        available *
        (percentage / 100)
      ).toFixed(2);
    } else if (
      Number(form.price) > 0
    ) {
      amount = (
        (available *
          (percentage / 100)) /
        Number(form.price)
      ).toFixed(6);
    }

    setForm((prev) => ({
      ...prev,
      amount,
    }));
  };

  const total = useMemo(() => {
    const price =
      Number(form.price) || 0;

    const amount =
      Number(form.amount) || 0;

    if (orderType === "MARKET") {
      return amount;
    }

    return price * amount;
  }, [
    form.price,
    form.amount,
    orderType,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit?.({
      side,
      type: orderType,
      symbol,
      price:
        orderType === "MARKET"
          ? null
          : Number(form.price),
      amount:
        Number(form.amount),
      total,
    });
  };

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-6
      "
    >
      {/* Header */}

      <div className="mb-6">

        <h2 className="text-xl font-semibold text-white">
          Place Order
        </h2>

        <p className="text-sm text-slate-400">
          {symbol}
        </p>

      </div>

      {/* Buy / Sell */}
      <div className="mb-6">
        <TradeSideTabs
            value={side}
            onChange={setSide}
        />
      </div>

      {/* Order Type */}

      <div className="mb-6">

        <OrderTypeTabs
          value={orderType}
          onChange={setOrderType}
        />

      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {orderType === "LIMIT" && (
          <OrderInput
            label="Price"
            value={form.price}
            onChange={handleChange(
              "price"
            )}
            placeholder="0.00"
            suffix={asset}
          />
        )}

        <OrderInput
          label="Amount"
          value={form.amount}
          onChange={handleChange(
            "amount"
          )}
          placeholder="0.00"
          suffix={
            symbol.split("/")[0]
          }
        />

        <QuickAmountSelector
          value={
            selectedPercentage
          }
          onChange={
            handlePercentageChange
          }
        />

        <OrderSummary
          symbol={symbol}
          side={side}
          orderType={orderType}
          total={total}
          wallet={wallet}
        />

        <SubmitOrderButton
          side={side}
          symbol={symbol}
          loading={loading}
          disabled={
            !form.amount ||
            (orderType ===
              "LIMIT" &&
              !form.price)
          }
        />

      </form>

    </div>
  );
};

export default BuySellPanel;