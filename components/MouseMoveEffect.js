"use client";
// components/MouseMoveEffect.js
import React, { useRef, useEffect } from "react";

const MouseMoveEffect = () => {
  const circleRef = useRef(null);

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const circle = circleRef.current;
    if (circle) {
      const circleX = mouseX - circle.offsetWidth / 2;
      const circleY = mouseY - circle.offsetHeight / 2;

      circle.style.left = `${circleX}px`;
      circle.style.top = `${circleY}px`;
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed z-50 pointer-events-none">
      <div
        ref={circleRef}
        className="w-[550px] h-[550px] bg-blue-900/20 opacity-40  blur-2xl rounded-full absolute "
        style={{
           transition: "transform 0.1s ease-out",
          transformOrigin: "center center",
        }}
      ></div>
    </div>
  );
};

export default MouseMoveEffect;
