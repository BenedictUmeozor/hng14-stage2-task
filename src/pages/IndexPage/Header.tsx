import Button from "@/components/Button";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router";
import StatusFilter from "./StatusFilter";

interface HeaderProps {
  onOpen: () => void;
}

const Header = ({ onOpen }: HeaderProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const navigate = useNavigate();

  const handleNewInvoiceClick = () => {
    if (isMobile) navigate("/create-invoice");
    else onOpen();
  };

  return (
    <header className="flex items-center justify-between gap-x-8">
      <div className="space-y-1.5 max-md:space-y-0.75">
        <h1 className="heading-l">Invoices</h1>
        <p className="text-highlight body">
          {isMobile ? "7 Invoices" : "There are 7 total invoices"}
        </p>
      </div>
      <div className="flex flex-1 items-center justify-end max-md:gap-x-4">
        <StatusFilter />
        <Button variant="button-1" onClick={handleNewInvoiceClick}>
          {isMobile ? "New" : "New Invoice"}
        </Button>
      </div>
    </header>
  );
};

export default Header;
