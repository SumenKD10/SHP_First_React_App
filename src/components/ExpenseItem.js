// Write your code at the relevant places in the code below:

import "./ExpenseItem.css";
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function ExpenseItem(props) {
  let date = props.date.getDate().toString();
  const month = months[Number(props.date.getMonth())];
  const year = props.date.getFullYear();
  console.log(date, month, year);
  date = date.length === 1 ? "0" + date : date;
  console.log("hello",date, month, year);

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{date}</div>
      </div>
      <div className="expense-item__location">{props.location}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;