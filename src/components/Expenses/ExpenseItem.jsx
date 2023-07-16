import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseData";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [expense, setExpense] = useState(props.amount);

  const handleAmount = () => {
    setExpense("100");
  };

  const handleClick = () => {
    setTitle("Updates");
    console.log(title);
  };
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{expense}$</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
      <button onClick={handleAmount}>Change Amount</button>
    </div>
  );
};

export default ExpenseItem;
