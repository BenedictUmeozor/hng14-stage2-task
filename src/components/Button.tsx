import PlusIcon from "@/assets/icons/PlusIcon";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant:
    | "button-1"
    | "button-2"
    | "button-3"
    | "button-4"
    | "button-5"
    | "button-6";
}

const BaseButton = ({ className, ...props }: ComponentProps<"button">) => {
  return (
    <button
      className={cn(
        "heading-s-variant bg-primary-light hover:bg-primary flex h-12 items-center gap-x-4 rounded-3xl px-6 whitespace-nowrap text-white transition-colors duration-150 ease-linear max-md:gap-x-2",
        className,
      )}
      {...props}
    />
  );
};

const Button = ({ variant, children, ...rest }: ButtonProps) => {
  if (variant === "button-1") {
    return (
      <BaseButton className="px-2 pr-4">
        <div className="flex size-8 items-center justify-center rounded-full bg-white">
          <PlusIcon />
        </div>
        {children}
      </BaseButton>
    );
  }

  if (variant === "button-2") {
    return <BaseButton>{children}</BaseButton>;
  }

  if (variant === "button-3") {
    return (
      <BaseButton className="text-07 dark:text-05 dark:bg-04 hover:bg-05 bg-[#F9FAFE] dark:hover:bg-white">
        {children}
      </BaseButton>
    );
  }

  if (variant === "button-4") {
    return (
      <BaseButton className="text-06 dark:text-05 hover:bg-08 dark:hover:bg-03 bg-[#373B53] dark:bg-[#373B53]">
        {children}
      </BaseButton>
    );
  }

  if (variant === "button-5") {
    return (
      <BaseButton className="hover:bg-10 bg-09 text-white">
        {children}
      </BaseButton>
    );
  }

  if (variant === "button-6") {
    return (
      <BaseButton className="hover:bg-07 text-05 bg-[#F9FAFE]">
        {children}
      </BaseButton>
    );
  }

  return <BaseButton {...rest} />;
};

export default Button;
