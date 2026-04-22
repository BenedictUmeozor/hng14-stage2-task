import { cn } from "@/lib/utils";
import Button from "./Button";

const DeleteModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-99999 flex items-center justify-center bg-black/50 transition-all duration-300 ease-in-out",
        isOpen
          ? "visible opacity-100"
          : "pointer-events-none invisible opacity-0",
      )}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={cn(
          "dark:bg-03 w-[90%] max-w-120 rounded-lg bg-white px-12 py-13 transition-all duration-300 ease-in-out max-md:px-8 max-md:py-9",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="heading-m text-08 mb-3 dark:text-white">
          Confirm Deletion
        </h3>
        <p className="body text-07 dark:text-05 mb-3.5">
          Are you sure you want to delete invoice #XM9141? This action cannot be
          undone.
        </p>
        <div className="flex items-center justify-end gap-x-2">
          <Button variant="button-3" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="button-5">Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
