import React from "react";

const Child = ({ count }) => {
  return (
    <div>
      <p data-testid="child-count-value">{count}</p>
    </div>
  );
};

export default Child;
