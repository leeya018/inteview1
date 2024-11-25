import React, { useState } from "react";

// A child component wrapped with React.memo
// by wrapping the child component with React.memo , we insure that it will render only by the props
//  that is changed by the parent,
// so only when the parent is chaniging the count so that childComp is being rendered
const ChildComponent = React.memo(({ count }: { count: number }) => {
  console.log("ChildComponent rendered");
  return <div>Count: {count}</div>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  return (
    <div>
      <h1>React.memo Example</h1>
      {/* ChildComponent will only re-render when "count" changes */}
      <ChildComponent count={count} />

      <button className="btn" onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      <button
        className="btn mt-4"
        onClick={() => setOtherState(otherState + 1)}
      >
        Increment Other State
      </button>

      <p>Other state: {otherState}</p>
    </div>
  );
};

export default ParentComponent;
