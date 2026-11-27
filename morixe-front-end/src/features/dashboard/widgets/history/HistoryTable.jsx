const HistoryTable = ({
  history,
}) => {
  return (
    <div className="overflow-x-auto">

      <table className="w-full">

        <thead>

          <tr className="border-b border-slate-800">

            <th className="text-left py-3">
              Date
            </th>

            <th className="text-left py-3">
              Type
            </th>

            <th className="text-left py-3">
              Asset
            </th>

            <th className="text-right py-3">
              Quantity
            </th>

            <th className="text-right py-3">
              Price
            </th>

            <th className="text-right py-3">
              Total
            </th>

            <th className="text-center py-3">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {history.map((trade) => (

            <tr
              key={trade.id}
              className="
                border-b
                border-slate-800
                hover:bg-slate-800/40
                transition
              "
            >

              <td className="py-4">
                {trade.date}
              </td>

              <td
                className={
                  trade.type === "Buy"
                    ? "text-emerald-400"
                    : trade.type === "Sell"
                    ? "text-red-400"
                    : "text-blue-400"
                }
              >
                {trade.type}
              </td>

              <td>{trade.asset}</td>

              <td className="text-right">
                {trade.quantity}
              </td>

              <td className="text-right">
                $
                {trade.price.toLocaleString()}
              </td>

              <td className="text-right font-semibold">
                $
                {trade.total.toLocaleString()}
              </td>

              <td className="text-center">

                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    ${
                      trade.status ===
                      "Completed"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }
                  `}
                >
                  {trade.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default HistoryTable;