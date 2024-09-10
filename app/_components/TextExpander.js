"use client";

import { useState } from "react";

export default function TextExpanders({ children }) {
  const [isExpand, setExpand] = useState(false);
  const displayText = isExpand
    ? children
    : children.split(" ").slice(0, 30).join(" ") + "...";
  return (
    <>
      <span>
        {displayText}{" "}
        <button
          onClick={() => setExpand((data) => !data)}
          className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        >
          {isExpand ? "show less" : "show more"}.
        </button>
      </span>
    </>
  );
}
