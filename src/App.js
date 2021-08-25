import { createContext, useReducer } from "react";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Heading from "./components/Heading";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import "./styles.css";

const GlobalState = createContext();

const initialState = {
  transactions: [
    { id: 1, text: "flower", amount: 300 },
    { id: 2, text: "Book", amount: -220 },
    { id: 1, text: "Lower", amount: 532 }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state)

  return (
    <GlobalState.Provider value={{ transaction: state.transactions }}>
      <div className="App">
        <Heading />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalState.Provider>
  );
}

export default App;

export { GlobalState };
