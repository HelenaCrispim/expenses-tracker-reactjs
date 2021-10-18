import React from "react";
import ExpenseItem from "./ExpenseItem";

function FilteredList(props) {
  if (props.items.length === 0) {
    return <h2 className="fallback">Found no expenses.</h2>
  }

  return (
    <ul className="filtered-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))};
    </ul>
  )
}

export default FilteredList