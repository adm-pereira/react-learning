import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import React from "react";

const Expenses = (props) => {

  const removeById = (id) => {
    props.deleteExpense(id);
  };

  const removeLast = () => {
    props.deleteExpense(-1);
  };

  return (
    <Card className="expenses">
      
      {props.data.map((expense) => (
        <div>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
          <button
            className="remove-expense"
            onClick={() => removeById(expense.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <p />
      <button className="remove-last-expense" onClick={removeLast}>
        Remove Last Expense!
      </button>
    </Card>
  );
};

export default Expenses;
