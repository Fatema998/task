import React, { useState, useContext } from "react";
import { useFinance } from "./FinanceContext";

const SubmissionForm = () => {
  const { addRecord } = useFinance();
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("Income");

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecord(type, parseFloat(amount));
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default SubmissionForm;
