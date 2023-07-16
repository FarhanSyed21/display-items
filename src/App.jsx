import NewExpense from "./components/NewExpense/NewExpense";
import "./styles.css";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "House Party",
    amount: 10000,
    date: new Date(2023, 7, 12)
  },
  { id: "e2", title: "TV Bill", amount: 500, date: new Date(2023, 5, 1) },
  {
    id: "e3",
    title: "Electricity",
    amount: 2000,
    date: new Date(2023, 1, 5)
  },
  { id: "e4", title: "Rent", amount: 3500, date: new Date(2023, 3, 5) }
];
export default function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
