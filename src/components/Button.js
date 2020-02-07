import React from "react";

export default function Button({ children, ...buttonProps }) {
  return (
    <button
      className="btn btn-white italic sm:mb-2 md:w-64 md:h-20 md:text-3xl"
      { ...buttonProps }
    >
      { children }
    </button>
  )
}