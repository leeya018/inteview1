"use client";

import React, { useEffect, useState } from "react";

console.log(1);
export default function page() {
  const [data, setdata] = useState(1);
  console.log(2);
  useEffect(() => {
    console.log(4); // on the first refresh so only 4 . no 5

    return () => {
      console.log(5); // when the data si change so 5 before 4
    };
  }, [data]);

  console.log(3);
  return (
    <div>
      <div>this is the main div</div>
      <button onClick={() => setdata((prev) => prev + 2)}>chaneg data</button>
    </div>
  );
}
