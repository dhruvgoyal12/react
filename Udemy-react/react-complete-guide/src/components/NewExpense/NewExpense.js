import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import "./ExpenseForm.css";
export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const [showExpense, setShowExpense] = useState(false);
  const toggleShowExpenseHandler = () => {
    setShowExpense((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="new-expense">
      {!showExpense && (
        <div>
          <button onClick={toggleShowExpenseHandler}>Add New Expense</button>
        </div>
      )}
      {showExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          toggleShowExpenseHandler={toggleShowExpenseHandler}
        />
      )}
    </div>
  );
}
