import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: ""
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: event.target.value
      }
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: event.target.value
      }
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: event.target.value
      }
    });
  };

  const submitButtonHandler = (event) => {
    event.preventDefault();
    const allInfo = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date).toISOString()
    }
    props.onSaveExpenseData(allInfo);
    setUserInput({
      title: "",
      amount: "",
      date: ""
    });
  }

  return (
    <form onSubmit={submitButtonHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input value={userInput.title} type="text" id="title" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input value={userInput.amount} type="number" id="amount" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input value={userInput.date} type="date" id="date" min="2023-01-01" max="2024-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;