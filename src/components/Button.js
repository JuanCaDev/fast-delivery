import React from "react";

export default function Button({ children, ...buttonProps }) {
  return (
    <button
      className="btn btn-white italic sm:mb-2 sm:text-xl lg:text-3xl"
      { ...buttonProps }
    >
      { children }
    </button>
  )
}