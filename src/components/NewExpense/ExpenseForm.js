import React, { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
      // to use a single state...
      // const [userInput, setUserInput] = useState({
      //   enteredTitle: '',
      //   enteredAmount: '',
      //   enteredDate: '',
      // });
      // const titleChangeHandler = (event) => {
      //   setUserInput((prevState) => {
      //     return {...prevState, enteredTitle: event.target.value};
      //   });
      // };
      // const amountChangeHandler = (event) => {
      //   setUserInput((prevState) => {
      //     return {...prevState, enteredAmount: event.target.value};          
      //   });
      // };
      // const dateChangeHandler = (event) => {
      //   setUserInput((prevState) => {
      //     return {...prevState, enteredDate: event.target.value};
      //   });
      // };
  
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);    
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="controls">
        <div className="control">
          <label>Title</label>
          <input 
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="control">
          <label>Amount</label>
          <input 
            type="number" 
            min="0.01" 
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="control">
          <label>Date</label>
          <input 
            type="date"
            min="2019-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
