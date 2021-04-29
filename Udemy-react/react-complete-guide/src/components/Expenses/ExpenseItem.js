import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // Must be called in function component function, not even inside other function
  // Returns array of 2 elements, the value and the function to change the value
  const [title, setTitle] = useState(props.expense.title);

  const clickHandler = () => {
    // This results in re-rendering of the component function (expenseItem here)
    setTitle("Updated!");
    // This will not show updated value, because re-rendering is scheduled by react, instead of immediate re-render.
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.expense.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
