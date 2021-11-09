import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {

  const submissionHandler = (submissionData) => {
      const expenseData = {...submissionData};
      props.onSubmission(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmission={submissionHandler} />
    </div>
  );
};
export default NewExpense;
