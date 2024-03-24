function ExpenseItem(){
    let date = '15 August 2023';
    let title = 'Book';
    let location = 'Delhi';
    let price = '$10';
    return (
      <>
        <div>
          {date}
        </div>
        <div>
          {title}
        </div>
        <div>
          {price}
        </div>
        <div>
          {location}
        </div>
      </>
    )
  }
  
  export default ExpenseItem;