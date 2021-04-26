import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  return props.expenses.map((expense) => {
    return (
      <div className="expenses">
        <ExpenseItem expense={expense} key={expense.id} />
      </div>
    );
  });
}
export default Expenses;
