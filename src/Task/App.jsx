import React from "react";
import { FinanceProvider } from "./FinanceContext";
import SubmissionForm from "./SubmissionForm";

import Expensive from "./Expensive";
import Income from "./Income";
import Balance from "./Balance";

const App = () => {
  return (
    <FinanceProvider>
      <div style={{ padding: "20px" }}>
        <h1>Finance Tracker</h1>
        <SubmissionForm />
        <Income />
        <Expensive />
        <Balance />
      </div>
    </FinanceProvider>
  );
};

export default App;
