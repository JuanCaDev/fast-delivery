import React from "react";

export default function Button({ children, ...buttonProps }) {
  return (
    <button
      className="btn btn-blue"
      { ...buttonProps }
    >
      { children }
    </button>
  )
}