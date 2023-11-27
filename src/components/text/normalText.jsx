import React from "react";

export default function NormalText({ children, forInput }) {
  return (
    <label
      htmlFor={forInput}
      className="d-flex justify-content-start mt-2 my-1"
    >
      {children}
    </label>
  );
}
