import { DollarSign } from "lucide-react";

const CurrencySettings = ({
  currency,
  onChange,
}) => {
  if (!currency) return null;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center gap-3">

        <DollarSign
          size={22}
          className="text-blue-400"
        />

        <h2 className="text-xl font-semibold text-white">
          Currency
        </h2>

      </div>

      <div className="mt-6">

        <label className="mb-2 block text-sm text-slate-400">
          Default Currency
        </label>

        <select
          value={currency.current}
          onChange={(e) =>
            onChange(
              "current",
              e.target.value
            )
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        >
          {currency.available.map(
            (item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            )
          )}
        </select>

      </div>

    </div>
  );
};

export default CurrencySettings;