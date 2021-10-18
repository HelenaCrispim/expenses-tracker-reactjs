import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import FilteredList from "./FilteredList";

function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterListChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expense-list">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterListChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <FilteredList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default ExpenseList;