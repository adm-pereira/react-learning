import "./ExpenseDate.css";
import Card from "../UI/Card";

function ExpenseDate(props) {
  const expenseDate = props.date;
  const month = expenseDate.toLocaleString("en-GB", { month: 'long' });
  const year = expenseDate.getFullYear();
  const day = expenseDate.toLocaleString("en-GB", { day: "2-digit" });

  return (
    <Card className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </Card>
  );
}

export default ExpenseDate;
