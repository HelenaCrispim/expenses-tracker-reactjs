import ExpenseList from "./components/ExpenseList";

function App() {
  const expenses = [
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
