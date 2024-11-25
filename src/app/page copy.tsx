"use client";
import React, { Suspense } from "react";
// import dynamic from "next/dynamic";

// // Dynamically import MyComponent with SSR disabled
// const MyComponent = dynamic(() => import("@/components/MyComponent"), {
//   ssr: false,
// });

const MyComponent = React.lazy(() => import("@/components/MyComponent"));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyComponent />
    </Suspense>
  );
}

export default App;
