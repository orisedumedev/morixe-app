import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

const TradingPairSelector = ({
  pairs = [],
  selectedPair,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  const [search, setSearch] =
    useState("");

  const filteredPairs = useMemo(() => {
    if (!search) return pairs;

    return pairs.filter((pair) =>
      pair.symbol
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [pairs, search]);

  const selected = pairs.find(
    (pair) =>
      pair.symbol === selectedPair
  );

  return (
    <div className="relative w-full max-w-sm">

      {/* Selected Pair */}

      <button
        type="button"
        onClick={() =>
          setOpen((prev) => !prev)
        }
        className="
          w-full
          flex
          justify-between
          items-center
          rounded-xl
          border
          border-slate-800
          bg-slate-900
          px-4
          py-3
          transition
          hover:border-blue-500
        "
      >
        <div>

          <p className="font-semibold text-white">
            {selected?.symbol}
          </p>

          <p
            className={`
              text-sm
              ${
                selected?.change24h >= 0
                  ? "text-emerald-400"
                  : "text-red-400"
              }
            `}
          >
            {selected?.change24h >= 0
              ? "+"
              : ""}
            {selected?.change24h}%
          </p>

        </div>

        <ChevronDown
          size={20}
          className={`
            transition-transform
            ${
              open
                ? "rotate-180"
                : ""
            }
          `}
        />

      </button>

      {/* Dropdown */}

      {open && (
        <div
          className="
            absolute
            left-0
            mt-2
            w-full
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            shadow-2xl
            z-50
          "
        >
          {/* Search */}

          <div className="relative p-3">

            <Search
              size={18}
              className="
                absolute
                left-6
                top-1/2
                -translate-y-1/2
                text-slate-500
              "
            />

            <input
              type="search"
              placeholder="Search pair..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="
                w-full
                rounded-xl
                bg-slate-800
                border
                border-slate-700
                pl-10
                pr-4
                py-2
                text-white
                placeholder:text-slate-500
                focus:outline-none
                focus:border-blue-500
              "
            />

          </div>

          {/* Pair List */}

          <div
            className="
              max-h-80
              overflow-y-auto
            "
          >
            {filteredPairs.map(
              (pair) => (
                <button
                  key={pair.id}
                  type="button"
                  onClick={() => {
                    onChange(
                      pair.symbol
                    );

                    setOpen(false);

                    setSearch("");
                  }}
                  className="
                    w-full
                    flex
                    justify-between
                    items-center
                    px-4
                    py-3
                    hover:bg-slate-800
                    transition
                  "
                >
                  <div className="text-left">

                    <h4 className="font-medium text-white">
                      {pair.symbol}
                    </h4>

                    <p className="text-sm text-slate-400">
                      $
                      {pair.price.toLocaleString()}
                    </p>

                  </div>

                  <span
                    className={`
                      font-medium
                      ${
                        pair.change24h >= 0
                          ? "text-emerald-400"
                          : "text-red-400"
                      }
                    `}
                  >
                    {pair.change24h >= 0
                      ? "+"
                      : ""}
                    {pair.change24h}%
                  </span>

                </button>
              )
            )}
          </div>

        </div>
      )}

    </div>
  );
};

export default TradingPairSelector;