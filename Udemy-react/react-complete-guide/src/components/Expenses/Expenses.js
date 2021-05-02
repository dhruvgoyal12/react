import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
      <ExpensesChart expenses={filterList} />
      <ExpensesList filterList={filterList} />
    </Card>
  );
}
export default Expenses;
