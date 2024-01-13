import React from "react";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";

export default function Mainpage() {
  return (
    <div className="w-full flex-1 overflow-y-auto p-8">
      <About />
      <Education />
      <Projects />
    </div>
  );
}
