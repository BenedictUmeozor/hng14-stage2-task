import BackButton from "@/components/BackButton";
import EditModal from "@/components/EditModal";
import data from "@/lib/data.json";
import { useState } from "react";
import { useParams } from "react-router";
import EmptyState from "../IndexPage/EmptyState";
import InvDetails from "./InvoiceDetails";
import InvoiceHeader from "./InvoiceHeader";

const InvoiceDetails = () => {
  const params = useParams() as { id: string };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const invoice = data.find((item) => item.id === params.id);

  if (!invoice) return <EmptyState />;

  return (
    <main className="max-md:pb-16">
      <BackButton />
      <InvoiceHeader invoice={invoice} onOpen={() => setIsModalOpen(true)} />
      <InvDetails invoice={invoice} />
      <EditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default InvoiceDetails;
