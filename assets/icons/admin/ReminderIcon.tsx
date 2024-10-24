import React from "react";

const ReminderIcon = () => {
  return (
    <svg
      fill="currentColor"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 icon line"
    >
      <path
        d="M12,21a9,9,0,1,1,9-9"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      ></path>
      <polyline
        data-name="primary"
        points="10 14 12 12 12 7"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      ></polyline>
      <line
        data-name="primary"
        x1="17"
        y1="13"
        x2="17"
        y2="16"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      ></line>
      <line
        id="primary-upstroke"
        x1="16.95"
        y1="20.5"
        x2="17.05"
        y2="20.5"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      ></line>
    </svg>
  );
};

export default ReminderIcon;
