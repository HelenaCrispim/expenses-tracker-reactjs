import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseList from "./components/Expenses/ExpenseList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    date: new Date(2020, 7, 14),
    title: "Toilet Paper",
    amount: 94.12,
  },
  {
    id: "e2",
    date: new Date(2021, 2, 12),
    title: "New TV",
    amount: 799.49,
  },
  {
    id: "e3",
    date: new Date(2021, 2, 28),
    title: "Car Insurance",
    amount: 294.67,
  },
  {
    id: "e4",
    date: new Date(2021, 5, 12),
    title: "New Desk (Wooden)",
    amount: 450,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList items={expenses} />
    </div>
  );
}

export default App;