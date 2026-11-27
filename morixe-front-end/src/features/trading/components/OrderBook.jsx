import {
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const formatPrice = (price) =>
  Number(price).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const formatAmount = (amount) =>
  Number(amount).toFixed(4);

const formatTotal = (price, amount) =>
  Number(price * amount).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const OrderRow = ({
  order,
  type,
}) => {
  const isBid = type === "bid";

  return (
    <div
      className="
        grid
        grid-cols-3
        gap-2
        py-2
        px-3
        rounded-lg
        hover:bg-slate-800/50
        transition
      "
    >
      <div
        className={`
          flex
          items-center
          gap-1
          font-medium
          ${
            isBid
              ? "text-emerald-400"
              : "text-red-400"
          }
        `}
      >
        {isBid ? (
          <ArrowUpRight size={14} />
        ) : (
          <ArrowDownRight size={14} />
        )}

        {formatPrice(order.price)}
      </div>

      <div className="text-right text-slate-300">
        {formatAmount(order.amount)}
      </div>

      <div className="text-right text-slate-500">
        {formatTotal(
          order.price,
          order.amount
        )}
      </div>
    </div>
  );
};

const OrderBook = ({
  bids = [],
  asks = [],
}) => {
  const bestBid =
    bids.length > 0
      ? bids[0].price
      : 0;

  const bestAsk =
    asks.length > 0
      ? asks[0].price
      : 0;

  const spread =
    bestAsk && bestBid
      ? (bestAsk - bestBid).toFixed(2)
      : "--";

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

      <div className="mb-5">

        <h2 className="text-xl font-semibold">
          Order Book
        </h2>

        <p className="text-slate-400 text-sm">
          Live market depth
        </p>

      </div>

      {/* Column Titles */}

      <div
        className="
          grid
          grid-cols-3
          gap-2
          text-xs
          uppercase
          tracking-wide
          text-slate-500
          border-b
          border-slate-800
          pb-2
          mb-2
        "
      >
        <div>Price</div>

        <div className="text-right">
          Amount
        </div>

        <div className="text-right">
          Total
        </div>

      </div>

      {/* Ask Orders */}

      <div className="space-y-1 mb-4">

        {asks
          .slice()
          .reverse()
          .map((order, index) => (
            <OrderRow
              key={`ask-${index}`}
              order={order}
              type="ask"
            />
          ))}

      </div>

      {/* Spread */}

      <div
        className="
          rounded-xl
          bg-slate-800
          py-3
          text-center
          mb-4
        "
      >
        <p className="text-xs text-slate-400">
          Spread
        </p>

        <p className="font-bold text-white">
          ${spread}
        </p>

      </div>

      {/* Bid Orders */}

      <div className="space-y-1">

        {bids.map((order, index) => (
          <OrderRow
            key={`bid-${index}`}
            order={order}
            type="bid"
          />
        ))}

      </div>
    </div>
  );
};

export default OrderBook;