import ChevronDownIcon from "@/assets/icons/ChevronDownIcon";
import { useState, useRef, useEffect, forwardRef } from "react";

interface SelectProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const options = [
  { label: "Net 1 Day", value: "1" },
  { label: "Net 7 Days", value: "7" },
  { label: "Net 14 Days", value: "14" },
  { label: "Net 30 Days", value: "30" },
];

const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ className, value, onChange }, ref) => {
    const [open, setOpen] = useState(false);
    const [internalValue, setInternalValue] = useState("30");
    const containerRef = useRef<HTMLDivElement>(null);

    const currentValue = value !== undefined ? value : internalValue;
    const selectedOption = options.find((o) => o.value === currentValue) || options[3];

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const handleSelect = (newValue: string) => {
      setInternalValue(newValue);
      onChange?.(newValue);
      setOpen(false);
    };

    return (
      <div className={`relative ${className || ""}`} ref={containerRef}>
        <div
          ref={ref}
          className={`heading-s-variant text-08 dark:bg-03 border-05 dark:border-04 flex h-12 w-full cursor-pointer items-center justify-between rounded border px-5 outline-none transition-colors hover:border-01 dark:text-white dark:hover:border-01 ${
            open ? "border-01! dark:border-01!" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          <span>{selectedOption.label}</span>
          <ChevronDownIcon />
        </div>

        {open && (
          <div className="dark:bg-04 absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-lg bg-white shadow-[0px_10px_20px_0px_rgba(72,84,159,0.25)] dark:shadow-none">
            {options.map((option, index) => (
              <div key={option.value}>
                <div
                  className="heading-s-variant text-08 hover:text-01 focus:text-01 dark:hover:text-01 dark:focus:text-01 flex cursor-pointer items-center px-6 py-4 transition-colors outline-none dark:text-white"
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                </div>
                {index < options.length - 1 && (
                  <div className="bg-05 dark:bg-03 h-px w-full" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";

export default Select;
