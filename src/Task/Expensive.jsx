import React from "react";
import { useFinance } from "./FinanceContext";

const Expensive = () => {
  const { records, deleteRecord } = useFinance();
  const expenses = records.filter((record) => record.type === "Expense");

  return (
    <div>
      <h2>Expenses</h2>
      {expenses.length > 0 ? (
        expenses.map((expense) => (
          <div key={expense.id}>
            <span>{expense.amount}</span>
            <button onClick={() => deleteRecord(expense.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No expenses recorded.</p>
      )}
    </div>
  );
};

export default Expensive;
