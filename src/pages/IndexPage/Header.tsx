import Button from "@/components/Button";
import { useMediaQuery } from "react-responsive";
import StatusFilter from "./StatusFilter";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header className="flex items-center justify-between gap-x-8">
      <div className="space-y-1.5 max-md:space-y-0.75">
        <h1 className="heading-l">Invoices</h1>
        <p className="text-highlight body">There are 7 total invoices</p>
      </div>
      <div className="flex flex-1 items-center justify-end max-md:gap-x-4">
        <StatusFilter />
        <Button variant="button-1">{isMobile ? "New" : "New Invoice"}</Button>
      </div>
    </header>
  );
};

export default Header;
