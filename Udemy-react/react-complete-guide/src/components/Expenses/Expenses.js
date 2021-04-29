import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  return props.expenses.map((expense) => {
    return (
      <Card className="expenses">
        <ExpenseItem expense={expense} key={expense.id} />
      </Card>
    );
  });
}
export default Expenses;
