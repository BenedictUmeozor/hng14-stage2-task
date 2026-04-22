import TrashIcon from "@/assets/icons/TrashIcon";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Navigate } from "react-router";

const CreateInvoice = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  useEffect(() => {
    if (isMobile) {
      document.body.className =
        "bg-white text-neutral-dark dark:bg-dark-bg font-sans antialiased dark:text-white";
    }

    return () => {
      document.body.className =
        "bg-accent-bg text-neutral-dark dark:bg-dark-bg font-sans antialiased dark:text-white";
    };
  }, [isMobile]);

  if (!isMobile) return <Navigate to="/" replace />;

  return (
    <>
      <main className="max-md:pb-16" onScroll={handleScroll}>
        <BackButton />
        <form className="mt-6">
          <h2 className="text-08 heading-m mb-5 dark:text-white">
            New Invoice
          </h2>

          <div className="mb-9">
            <h4 className="text-01 heading-s-variant mb-6">Bill From</h4>
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="streetAddress"
                  className="flex items-center justify-between"
                >
                  <span
                    className={cn(
                      "text-07 body-variant dark:text-05",
                      //  error &&  "text-09",
                    )}
                  >
                    Street Address
                  </span>
                  {/* <span className="text-09 text-[10px] leading-[15px] font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
                </label>
                <Input type="text" id="streetAddress" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="flex items-center justify-between"
                  >
                    <span className={cn("text-07 body-variant dark:text-05")}>
                      City
                    </span>
                    {/* <span className="text-09 text-[10px] leading-[15px] font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
                  </label>
                  <Input type="text" id="city" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="postCode"
                    className="flex items-center justify-between"
                  >
                    <span className={cn("text-07 body-variant dark:text-05")}>
                      Post Code
                    </span>
                    {/* <span className="text-09 text-[10px] leading-[15px] font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
                  </label>
                  <Input type="text" id="postCode" />
                </div>
                <div className="col-span-2 space-y-2">
                  <label
                    htmlFor="country"
                    className="flex items-center justify-between"
                  >
                    <span className={cn("text-07 body-variant dark:text-05")}>
                      Country
                    </span>
                    {/* <span className="text-09 text-[10px] leading-[15px] font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
                  </label>
                  <Input type="text" id="country" />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-9">
            <h4 className="text-01 heading-s-variant mb-6">Bill To</h4>
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="streetAddress"
                  className="flex items-center justify-between"
                >
                  <span
                    className={cn(
                      "text-07 body-variant dark:text-05",
                      //  error &&  "text-09",
                    )}
                  >
                    Client's Name
                  </span>
                  {/* <span className="text-09 text-[10px] leading-3.75 font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
                </label>
                <Input type="text" id="streetAddress" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="streetAddress"
                  className="flex items-center justify-between"
                >
                  <span
                    className={cn(
                      "text-07 body-variant dark:text-05",
                      //  error &&  "text-09",
                    )}
                  >
                    Client's Email
                  </span>
                  {/* <span className="text-09 text-[10px] leading-[15px] font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
                </label>
                <Input type="email" id="streetAddress" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="streetAddress"
                  className="flex items-center justify-between"
                >
                  <span
                    className={cn(
                      "text-07 body-variant dark:text-05",
                      //  error &&  "text-09",
                    )}
                  >
                    Street Address
                  </span>
                  {/* <span className="text-09 text-[10px] leading-[15px] font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
                </label>
                <Input type="text" id="streetAddress" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="flex items-center justify-between"
                  >
                    <span className={cn("text-07 body-variant dark:text-05")}>
                      City
                    </span>
                    {/* <span className="text-09 text-[10px] leading-[15px] font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
                  </label>
                  <Input type="text" id="city" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="postCode"
                    className="flex items-center justify-between"
                  >
                    <span className={cn("text-07 body-variant dark:text-05")}>
                      Post Code
                    </span>
                    {/* <span className="text-09 text-[10px] leading-[15px] font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
                  </label>
                  <Input type="text" id="postCode" />
                </div>
                <div className="col-span-2 space-y-2">
                  <label
                    htmlFor="country"
                    className="flex items-center justify-between"
                  >
                    <span className={cn("text-07 body-variant dark:text-05")}>
                      Country
                    </span>
                    {/* <span className="text-09 text-[10px] leading-[15px] font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
                  </label>
                  <Input type="text" id="country" />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-14 grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="postCode"
                className="flex items-center justify-between"
              >
                <span className={cn("text-07 body-variant dark:text-05")}>
                  Invoice Date
                </span>
                {/* <span className="text-09 text-[10px] leading-[15px] font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
              </label>
              <DatePicker />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="postCode"
                className="flex items-center justify-between"
              >
                <span className={cn("text-07 body-variant dark:text-05")}>
                  Payment Terms
                </span>
                {/* <span className="text-09 text-[10px] leading-[15px] font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
              </label>
              <Select />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="country"
                className="flex items-center justify-between"
              >
                <span className={cn("text-07 body-variant dark:text-05")}>
                  Project Description
                </span>
                {/* <span className="text-09 text-[10px] leading-[15px] font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
              </label>
              <Input type="text" id="country" />
            </div>
          </div>

          <div className="mb-8">
            <h4 className="mb-6 text-[18px] leading-8 font-bold text-[#777F98]">
              Item List
            </h4>
            <div className="space-y-11">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="country"
                    className="flex items-center justify-between"
                  >
                    <span className={cn("text-07 body-variant dark:text-05")}>
                      Item Name
                    </span>
                    {/* <span className="text-09 text-[10px] leading-[15px] font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
                  </label>
                  <Input type="text" id="country" />
                </div>
                <div className="flex items-center gap-x-4">
                  <div className="w-[19.6%] space-y-2">
                    <label
                      htmlFor="country"
                      className="flex items-center justify-between"
                    >
                      <span className={cn("text-07 body-variant dark:text-05")}>
                        Qty.
                      </span>
                      {/* <span className="text-09 text-[10px] leading-[15px] font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
                    </label>
                    <Input type="number" />
                  </div>
                  <div className="w-[30.6%] space-y-2">
                    <label
                      htmlFor="country"
                      className="flex items-center justify-between"
                    >
                      <span className={cn("text-07 body-variant dark:text-05")}>
                        Price
                      </span>
                      {/* <span className="text-09 text-[10px] leading-[15px] font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
                    </label>
                    <Input type="number" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="text-07 body-variant dark:text-05">Total</p>
                    <div className="flex h-12 items-center justify-start">
                      <span className="text-06 heading-s-variant">156.00</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p></p>
                    <div className="flex h-12 items-center justify-end">
                      <button className="transition-opacity duration-150 ease-linear hover:opacity-50">
                        <TrashIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="country"
                    className="flex items-center justify-between"
                  >
                    <span className={cn("text-07 body-variant dark:text-05")}>
                      Item Name
                    </span>
                    {/* <span className="text-09 text-[10px] leading-[15px] font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
                  </label>
                  <Input type="text" id="country" />
                </div>
                <div className="flex items-center gap-x-4">
                  <div className="w-[19.6%] space-y-2">
                    <label
                      htmlFor="country"
                      className="flex items-center justify-between"
                    >
                      <span className={cn("text-07 body-variant dark:text-05")}>
                        Qty.
                      </span>
                      {/* <span className="text-09 text-[10px] leading-[15px] font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
                    </label>
                    <Input type="number" />
                  </div>
                  <div className="w-[30.6%] space-y-2">
                    <label
                      htmlFor="country"
                      className="flex items-center justify-between"
                    >
                      <span className={cn("text-07 body-variant dark:text-05")}>
                        Price
                      </span>
                      {/* <span className="text-09 text-[10px] leading-[15px] font-semibold tracking-[-0.21px]">
                    can’t be empty
                  </span> */}
                    </label>
                    <Input type="number" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="text-07 body-variant dark:text-05">Total</p>
                    <div className="flex h-12 items-center justify-start">
                      <span className="text-06 heading-s-variant">156.00</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p></p>
                    <div className="flex h-12 items-center justify-end">
                      <button className="transition-opacity duration-150 ease-linear hover:opacity-50">
                        <TrashIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button variant="button-6">+ Add New Item</Button>
        </form>
        <div className="my-8">
          <p className="text-09 text-[10px] leading-3.75 font-semibold">
            - All fields must be added
          </p>
          <p className="text-09 text-[10px] leading-3.75 font-semibold">
            - An item must be added
          </p>
        </div>
      </main>
      <div
        className={cn(
          "dark:bg-12 fixed right-0 bottom-0 left-0 z-40 flex items-center justify-between rounded-tr-2xl bg-white px-13 py-8 lg:pl-38.75",
          hasScrolled && "shadow-[0_-8px_16px_-4px_rgba(0,0,0,0.1)]",
        )}
      >
        <Button variant="button-3" type="button">
          Discard
        </Button>
        <div className="flex items-center gap-x-2">
          <Button variant="button-4" type="button">
            Save as draft
          </Button>
          <Button variant="button-2" type="submit">
            Save & Send
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateInvoice;
