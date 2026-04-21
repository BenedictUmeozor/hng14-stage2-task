import App from "@/App";
import IndexPage from "@/pages/IndexPage";
import EmptyState from "@/pages/IndexPage/EmptyState";
import InvoiceDetails from "@/pages/InvoiceDetails";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: IndexPage },
      { path: "/:id", Component: InvoiceDetails },
      { path: "*", Component: EmptyState },
    ],
  },
]);

export default router;
