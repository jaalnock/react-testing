import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Counter;
