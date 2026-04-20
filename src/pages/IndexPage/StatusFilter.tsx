import ChevronDownIcon from "@/assets/icons/ChevronDownIcon";
import Checkbox from "@/components/Checkbox";
import { STATUS_OPTIONS } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

const StatusFilter = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleClick = (option: string) => {
    setSelected((prev) => {
      if (prev.includes(option)) {
        return prev.filter((item) => item !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  return (
    <div
      ref={dropdownRef}
      className="relative flex max-w-[192px] items-center justify-center md:w-full"
    >
      <button
        className="heading-s-variant flex items-center gap-x-[14px]"
        onClick={() => setOpen((prev) => !prev)}
      >
        {isMobile ? <span>Filter</span> : <span>Filter by status</span>}
        <ChevronDownIcon />
      </button>
      {open && (
        <div className="dark:bg-04 absolute top-[calc(100%+24px)] left-0 z-10 w-full min-w-[192px] rounded-lg bg-white p-6 max-md:-left-1/2">
          <ul className="space-y-[15px]">
            {STATUS_OPTIONS.map((option) => (
              <li
                key={option.id}
                className="group flex cursor-pointer items-center gap-x-[13px]"
                onClick={() => handleClick(option.id)}
              >
                <Checkbox checked={selected.includes(option.id)} />
                <span className="heading-s-variant">{option.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StatusFilter;
