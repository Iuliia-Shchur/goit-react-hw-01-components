import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={s.table}>{item.type}</td>
            <td className={s.table}>{item.amount}</td>
            <td className={s.table}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
