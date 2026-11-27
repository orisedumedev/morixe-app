const columns = [
  "Asset",
  "Type",
  "Amount",
  "Network",
  "Status",
  "Date",
  "Transaction ID",
];

const TransactionTableHeader = () => {
  return (
    <thead className="bg-slate-900">
      <tr>
        {columns.map((column) => (
          <th
            key={column}
            className="
              whitespace-nowrap
              px-6
              py-4
              text-left
              text-sm
              font-semibold
              text-slate-400
            "
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TransactionTableHeader;