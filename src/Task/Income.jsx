import React from "react";
import { useFinance } from "./FinanceContext";

const Income = () => {
  const { records, deleteRecord } = useFinance();
  const incomeRecords = records.filter((record) => record.type === "Income");

  return (
    <div>
      <h2>Income</h2>
      {incomeRecords.length > 0 ? (
        incomeRecords.map((incomeRecord) => (
          <div key={incomeRecord.id}>
            <span>{incomeRecord.amount}</span>
            <button onClick={() => deleteRecord(incomeRecord.id)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No income recorded.</p>
      )}
    </div>
  );
};

export default Income;
