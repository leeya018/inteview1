"use client";
import MemoExample from "@/components/MemoExample";
import ParentComponentCallback from "@/components/ParentComponentCallback";
import ParentComponentMemo from "@/components/ParentComponentMemo";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggler from "@/components/ThemeToggler";
import React from "react";

export default function page() {
  return (
    // <div>
    //   <h1>I am the main page </h1>
    //   {/* <MemoExample /> */}
    //   {/* <ParentComponentCallback /> */}
    //   {/* <ParentComponentMemo /> */}
    // </div>
    <ThemeProvider>
      <div>
        <h1>useContext Example</h1>
        <ThemeToggler />
      </div>
    </ThemeProvider>
  );
}
