import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
export default function ExpensesList(props) {
  let expensesContent = (
    <h2 className="expenses-list__fallback">No Expenses found</h2>
  );

  console.log(props.filterList);
  if (props.filterList.length === 0) {
    return expensesContent;
  }
  return (
    <ul className="expenses-list">
      {props.filterList.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
    </ul>
  );
}
