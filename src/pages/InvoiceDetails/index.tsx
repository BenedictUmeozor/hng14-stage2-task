import BackButton from "@/components/BackButton";
import data from "@/lib/data.json";
import { useParams } from "react-router";
import EmptyState from "../IndexPage/EmptyState";
import InvDetails from "./InvoiceDetails";
import InvoiceHeader from "./InvoiceHeader";

const InvoiceDetails = () => {
  const params = useParams() as { id: string };

  const invoice = data.find((item) => item.id === params.id);

  if (!invoice) return <EmptyState />;

  return (
    <main className="max-md:pb-16">
      <BackButton />
      <InvoiceHeader invoice={invoice} />
      <InvDetails invoice={invoice} />
    </main>
  );
};

export default InvoiceDetails;
