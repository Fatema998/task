import React from "react";
import { useFinance } from "./FinanceContext";

const Balance = () => {
  const { balance, totalIncome, totalExpense } = useFinance();

  return (
    <div>
      <h2>Balance Overview</h2>
      <div>Balance: ${balance.toFixed(2)}</div>
      <div>Total Income: ${totalIncome.toFixed(2)}</div>
      <div>Total Expense: ${totalExpense.toFixed(2)}</div>
    </div>
  );
};

export default Balance;
