import React from "react";

export default function Container({ children, className }) {
  return (
    <div
      className={`max-w-[1400px] lg:max-w-[1800px] mx-auto px-4  ${className}`}
    >
      {children}
    </div>
  );
}
