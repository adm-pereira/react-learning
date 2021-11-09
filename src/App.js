import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/Expenses/NewExpense";
import React, { useState, useEffect } from "react";

const App = () => {
  const data = [
    {
      id: 1,
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 2,
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 3,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 4,
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState([]);

  // only for the first time
  useEffect(() => {
    setExpenses(data);
  }, []);

  const addExpense = (submissionData) => {
    console.log("arrived", submissionData);
    const newExpense = {
      ...submissionData,
    };
    setExpenses([
      ...expenses,
      newExpense,
    ]);
  };

  const deleteExpense = (id) => {
    let aux = [...expenses];
    if (id === -1) {
      //delete last one
      aux && aux.pop();
    } else {
      aux = aux.filter((el) => el.id !== id);
    }
    setExpenses(aux);
  };

  console.log(expenses);

  return (
    <div>
      <NewExpense onSubmission={addExpense} />
      <Expenses data={expenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default App;
