import TransactionTableHeader from "./TransactionTableHeader";
import TransactionTableRow from "./TransactionTableRow";

const TransactionTable = ({
  transactions = [],
  loading = false,
}) => {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
      "
    >
      <div className="overflow-x-auto">

        <table className="min-w-full">

          <TransactionTableHeader />

          <tbody>

            {loading ? (

              <tr>

                <td
                  colSpan={7}
                  className="
                    py-16
                    text-center
                    text-slate-400
                  "
                >
                  Loading transactions...
                </td>

              </tr>

            ) : transactions.length === 0 ? (

              <tr>

                <td
                  colSpan={7}
                  className="
                    py-16
                    text-center
                    text-slate-500
                  "
                >
                  No transactions found.
                </td>

              </tr>

            ) : (

              transactions.map(
                (transaction) => (
                  <TransactionTableRow
                    key={transaction.id}
                    transaction={
                      transaction
                    }
                  />
                )
              )

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default TransactionTable;