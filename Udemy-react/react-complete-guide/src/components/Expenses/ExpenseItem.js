import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">{props.expense.amount}</div>
      </div>
      <button>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
