import React from "react";

export default function Button({ children, ...buttonProps }) {
  return (
    <button
      className="btn btn-white sm:mb-2 w-64 h-20 text-3xl italic"
      { ...buttonProps }
    >
      { children }
    </button>
  )
}
// border-b-4 border-gray-400