import css from "./TransactionHistory.module.css";
const TransactionHistory = (items) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th
            style={{
              fontWeight: 700,
            }}
          >
            Type
          </th>
          <th
            style={{
              fontWeight: 700,
            }}
          >
            Amount
          </th>
          <th
            style={{
              fontWeight: 700,
            }}
          >
            Currency
          </th>
        </tr>
      </thead>
      <tbody>
        {items.items.map((e) => {
          let name = e.type;
          name = name.replace(name[0], name[0].toUpperCase());
          return (
            <tr key={e.id}>
              <td
                style={{
                  textAlign: "center",
                }}
              >
                {name}
              </td>
              <td
                style={{
                  textAlign: "center",
                }}
              >
                {e.amount}
              </td>
              <td
                style={{
                  textAlign: "center",
                }}
              >
                {e.currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
