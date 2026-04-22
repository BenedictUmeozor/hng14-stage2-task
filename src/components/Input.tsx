import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  error?: boolean;
}

const Input = ({ className, error, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={cn(
        "heading-s-variant focus:border-02! text-08 dark:bg-03 dark:focus:border-04! caret-01 block h-12 w-full rounded border px-5 focus:outline-none dark:text-white",
        error ? "border-09!" : "border-05! dark:border-04!",
        className,
      )}
    />
  );
};

export default Input;
