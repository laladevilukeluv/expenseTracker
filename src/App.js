import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";
import Navbar from "./components/UI/Navbar";
import myImage from "./—Pngtree—growth grow hand success_4517385.png";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "iPhone 11 Pro",
    amount: 1000.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Health Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Microwave",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((preveExpenses) => {
      return [expense, ...preveExpenses];
    });
  };

  return (
    <div>
      <Navbar src={myImage} />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
