const Transaction = ({ trans }) => {
  const sign = trans.amount > 0 ? "+" : "-";
  return (
    <li>
      {trans.text}
      <span>
        {sign}${Math.abs(trans.amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
