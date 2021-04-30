import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const pickedYearHandler = (year) => {
    setFilterYear(year);
  };

  return props.expenses.map((expense) => {
    return (
      <Card className="expenses">
        <ExpensesFilter
          dropdownStartYear={filterYear}
          onYearFilter={pickedYearHandler}
        />
        <ExpenseItem expense={expense} key={expense.id} />
      </Card>
    );
  });
}
export default Expenses;
