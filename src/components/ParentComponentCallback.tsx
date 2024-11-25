import React, { useState, useCallback } from "react";

// A child component
const ChildComponent = React.memo(
  ({ onButtonClick }: { onButtonClick: () => void }) => {
    console.log("ChildComponent rendered");
    return (
      <div>
        <button className="btn mb-3" onClick={onButtonClick}>
          Click me
        </button>
      </div>
    );
  }
);

const ParentComponentCallback = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // useCallback memoizes the function and only recreates it when "count" changes
  const handleClick = useCallback(() => {
    console.log(`Button clicked, count: ${count}`);
  }, [count]);

  return (
    <div>
      <h1>useCallback Example</h1>
      <ChildComponent onButtonClick={handleClick} />

      <button className="btn" onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
      <button
        className="btn mt-4"
        onClick={() => setOtherState(otherState + 1)}
      >
        Increment Other State: {otherState}
      </button>
    </div>
  );
};

export default ParentComponentCallback;
