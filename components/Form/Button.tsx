import React from "react";

export type PropsTypeButton = {
  name: string;
  type?: "submit" | "reset" | "button";
  variant?: "solid" | "outline";
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({ name, type = "button", variant = "solid", ...props }: PropsTypeButton) => {
  return (
    <button
      className={`${
        variant === "solid"
          ? "bg-dark-green text-white hover:bg-black/90 group-invalid:pointer-events-none group-invalid:opacity-70"
          : "border border-dark-green text-dark-green hover:bg-black/15 bg-transparent"
      } ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
      type={type}
      {...props}
    >
      {name}
    </button>
  );
};

export default Button;
