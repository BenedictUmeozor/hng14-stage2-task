import TrashIcon from "@/assets/icons/TrashIcon";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Button from "./Button";
import DatePicker from "./DatePicker";
import Input from "./Input";
import Select from "./Select";

const AddModal = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0);
  };

  return (
    <div className="fixed inset-0 z-99 bg-black/50">
      <form className="dark:bg-12 grid h-full w-full max-w-179.75 grid-rows-[1fr_auto] overflow-hidden rounded-r-2xl bg-white pb-0 max-lg:max-w-154">
        <div
          onScroll={handleScroll}
          className={cn("overflow-y-auto px-13 pt-13 lg:pl-38.75")}
        >
          <h2 className="text-08 heading-m mb-11 dark:text-white">
            New Invoice
          </h2>

          <div className="mb-12">
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
              <div className="grid grid-cols-3 gap-x-6">
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
                <div className="space-y-2">
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
              <div className="grid grid-cols-3 gap-x-6">
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
                <div className="space-y-2">
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

          <div className="mb-12 grid grid-cols-2 gap-6">
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
            <div className="space-y-2 md:col-span-2">
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

          <div>
            <h4 className="mb-6 text-[18px] leading-8 font-bold text-[#777F98]">
              Item List
            </h4>
            <table className="w-full">
              <colgroup>
                <col className="w-[45.6%]" />
                <col className="w-[12.3%]" />
                <col className="w-[23%]" />
                <col className="w-[16.4%]" />
                <col className="w-auto" />
              </colgroup>
              <thead>
                <tr>
                  <th className="body-variant text-07 dark:text-05 text-left">
                    Item Name
                  </th>
                  <th className="body-variant text-07 dark:text-05 text-left">
                    Qty.
                  </th>
                  <th className="body-variant text-07 dark:text-05 text-left">
                    Price
                  </th>
                  <th className="body-variant text-07 dark:text-05 text-left">
                    Total
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4.5 pr-4">
                    <Input type="text" />
                  </td>
                  <td className="py-4.5 pr-4">
                    <Input type="number" className="px-2" />
                  </td>
                  <td className="py-4.5 pr-4">
                    <Input type="number" className="px-2" />
                  </td>
                  <td>
                    <span className="text-06 heading-s-variant">156.00</span>
                  </td>
                  <td>
                    <button className="transition-opacity duration-150 ease-linear hover:opacity-50">
                      <TrashIcon />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-4.5 pr-4">
                    <Input type="text" />
                  </td>
                  <td className="py-4.5 pr-4">
                    <Input type="number" className="px-2" />
                  </td>
                  <td className="py-4.5 pr-4">
                    <Input type="number" className="px-2" />
                  </td>
                  <td>
                    <span className="text-06 heading-s-variant">156.00</span>
                  </td>
                  <td>
                    <button className="transition-opacity duration-150 ease-linear hover:opacity-50">
                      <TrashIcon />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <Button variant="button-6">+ Add New Item</Button>
          </div>
          <div className="my-8">
            <p className="text-09 text-[10px] leading-3.75 font-semibold">
              - All fields must be added
            </p>
            <p className="text-09 text-[10px] leading-3.75 font-semibold">
              - An item must be added
            </p>
          </div>
        </div>
        <div
          className={cn(
            "flex items-center justify-between rounded-tr-2xl px-13 py-8 lg:pl-38.75",
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
      </form>
    </div>
  );
};

export default AddModal;
