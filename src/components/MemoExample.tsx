import React, { useState, useMemo } from "react";

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(0);

  // Expensive computation
  const expensiveCalculation = (num: number) => {
    console.log("Performing expensive calculation...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += num;
    }
    return total;
  };

  // Memoizing the result of the expensive calculation
  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Count: {count}</p>
      <p>Increment: {increment}</p>
      <p>Memoized Value: {memoizedValue}</p>
      <button className="btn" onClick={() => setCount((prev) => prev + 1)}>
        Increase Count
      </button>
      <button
        className="btn mt-2"
        onClick={() => setIncrement((prev) => prev + 1)}
      >
        Increase Increment
      </button>
    </div>
  );
};

export default MemoExample;

//expensiveCalculation - we need to memoize that function because we dont want it
// to invoke each time each state change, only the states that are relevant to this function ,
//  becusae this function take lots of time to end,
// so we want to prevent unnessasay invokes
