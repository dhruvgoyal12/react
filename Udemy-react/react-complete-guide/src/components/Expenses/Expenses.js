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

  const filterList = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        dropdownStartYear={filterYear}
        onYearFilter={pickedYearHandler}
      />
      {filterList.map((expense) => {
        return <ExpenseItem expense={expense} key={expense.id} />;
      })}
    </Card>
  );
}
export default Expenses;
