import './ExpenseDate.css';
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function ExpenseDate(props){
  let date = props.date.getDate().toString();
  const month = months[Number(props.date.getMonth())];
  const year = props.date.getFullYear();
  date = date.length === 1 ? "0" + date : date;
  
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{date}</div>
    </div>
  )
}

export default ExpenseDate;