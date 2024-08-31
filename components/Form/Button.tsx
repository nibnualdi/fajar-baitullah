import dynamic from "next/dynamic";
import React from "react";

const Spinner = dynamic(() => import("@/components/Spinner/Spinner"), {
  ssr: false,
});

export type PropsTypeButton = {
  name: string;
  type?: "submit" | "reset" | "button";
  variant?: "solid" | "outline";
  colorSceme?: "green" | "red" | "gray";
  isLoading?: boolean;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({
  name,
  type = "button",
  variant = "solid",
  colorSceme = "green",
  isLoading = false,
  ...props
}: PropsTypeButton) => {
  return (
    <button
      className={`${
        variant === "solid"
          ? `${
              colorSceme === "green"
                ? "bg-dark-green"
                : colorSceme === "red"
                  ? "bg-red"
                  : "bg-white"
            } text-white hover:bg-black/90 group-invalid:pointer-events-none group-invalid:opacity-70`
          : `border ${
              colorSceme === "green"
                ? "border-dark-green text-dark-green"
                : colorSceme === "red"
                  ? "border-red text-red"
                  : "border-zinc-400 text-zinc-400"
            } hover:bg-black/15 bg-transparent`
      } ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
      type={type}
      {...props}
    >
      {isLoading ? <Spinner size="medium" /> : name}
    </button>
  );
};

export default Button;
