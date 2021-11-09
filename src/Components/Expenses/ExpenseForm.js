import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [counter, setCounter] = useState(5);

  const [formInfo, setFormInfo] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleFormHandler = (event) => {
    setFormInfo({
      ...formInfo,
      title: event.target.value,
    });
  };

  const amountFormHandler = (event) => {
    setFormInfo({
      ...formInfo,
      amount: event.target.value,
    });
  };

  const dateFormHandler = (event) => {
    setFormInfo({
      ...formInfo,
      date: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const submissionData = {
      ...formInfo,
      date: new Date(formInfo.date),
      id: counter,
    };

    props.onSubmission(submissionData);

    setCounter(counter + 1);
    setFormInfo({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={formInfo.title}
            onChange={titleFormHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={formInfo.amount}
            min="0.01"
            step="0.01"
            onChange={amountFormHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={formInfo.date}
            min="2021-01-01"
            max="2022-12-31"
            onChange={dateFormHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
/*

<div>
  <label className="title" for="title">
    Title
  </label>
  <input
    id="title"
    /*value={title}
    onChange={(event) => setTitle(event.target.value)}
  />
  <label className="amount" for="amount">
    Amount
  </label>
  <input
    id="amount"
    /*value={amount}
    onChange={(event) => setAmount(event.target.value)}
  />
  <label className="date" for="date">
    Date
  </label>
  <input
    id="date"
    type="date"
    /*value={date}
    onChange={(event) => {
      const year = event.target.value.substring(0, 4);
      const month = event.target.value.substring(5, 7);
      const day = event.target.value.substring(8, 10);
      const aux = new Date(year, month - 1, day, 0, 0, 0, 0);
      console.log(aux);
      setDate(aux);
    }}
  />
</div>;
*/
