import AddModal from "@/components/AddModal";
import Header from "./Header";
import InvoiceList from "./InvoiceList";

export default function IndexPage() {
  return (
    <main>
      <Header />
      {/* <EmptyState /> */}
      <InvoiceList />
      <AddModal />
    </main>
  );
}
