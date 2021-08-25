import { useContext } from "react";
import { GlobalState } from "../App";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transaction } = useContext(GlobalState);
  return (
    <div className="transaction-list">
      <h3>History</h3>
      <ul className="list">
        {transaction.map((trans) => (
          <Transaction trans={trans} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
