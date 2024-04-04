import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  function buttonClickHandler(){
    console.log("Button Clicked!");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={buttonClickHandler}>Click Here!</button>
    </Card>
  );
}

export default ExpenseItem;
