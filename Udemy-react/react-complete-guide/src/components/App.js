import "../App.css";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";
import { useState } from "react";
import Chart from "./Chart/Chart";

function App() {
  const Dummy_expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(Dummy_expenses);

  const addExpenseHandler = (expense) => {
    console.log("In app.js", expense);

    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
