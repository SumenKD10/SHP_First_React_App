import ChartBar from "./ChartBar";
import "./Chart.css";

// Write your code below:
const Chart = (props) => {
    const expenseOnly = props.expenses.map((monthExpenseData) => {
        return monthExpenseData.price;
    });
    const maxPrice = Math.max(...expenseOnly);
    console.log(maxPrice);

    const chartData = [
        { expenseMonth: 'Jan', expenseValue: 0 },
        { expenseMonth: 'Feb', expenseValue: 0 },
        { expenseMonth: 'Mar', expenseValue: 0 },
        { expenseMonth: 'Apr', expenseValue: 0 },
        { expenseMonth: 'May', expenseValue: 0 },
        { expenseMonth: 'Jun', expenseValue: 0 },
        { expenseMonth: 'July', expenseValue: 0 },
        { expenseMonth: 'Aug', expenseValue: 0 },
        { expenseMonth: 'Sep', expenseValue: 0 },
        { expenseMonth: 'Oct', expenseValue: 0 },
        { expenseMonth: 'Nov', expenseValue: 0 },
        { expenseMonth: 'Dec', expenseValue: 0 }
    ];
    for (let expense of props.expenses) {
        chartData[expense.date.getMonth()].expenseValue = expense.price;
    }

    return (
        <div className="chart">
            {chartData.map((monthData) => {
                return (
                    <ChartBar
                        key={monthData.expenseMonth}
                        label={monthData.expenseMonth}
                        value={monthData.expenseValue}
                        maxValue={maxPrice}
                    />
                )
            })}
        </div>
    )
}


export default Chart;