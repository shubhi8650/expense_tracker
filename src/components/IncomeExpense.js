import { useContext } from "react";
import { GlobalState } from "../App.js";

const IncomeExpense = () => {
  const { transaction } = useContext(GlobalState);
  const positive = transaction
    .map((item) => item.amount)
    .filter((item) => item > 0)
    .reduce((acc, data) => (acc += data), 0)
    .toFixed(2);
  const negative = transaction
    .map((item) => item.amount)
    .filter((item) => item < 0)
    .reduce((acc, data) => (acc += data), 0)
    .toFixed(2);
  return (
    <div className="income-expense">
      <div className="income">
        <h3>Income</h3>
        <p>${positive}</p>
      </div>
      <div className="expense">
        <h3>Expense</h3>
        <p>-${Math.abs(negative)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
