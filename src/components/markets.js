import React from "react";
import TableData from "./market_item";

const Markets = ({ market }) => {
  return (
    <div>
      <h1>Markets</h1>
      <TableData market={market} />
    </div>
  );
};

export default Markets;
