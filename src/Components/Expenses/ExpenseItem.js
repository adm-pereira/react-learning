import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <Card className="expense-item__price">{expenseAmount}€</Card>
      </div>
    </Card>
  );
};

export default ExpenseItem;
