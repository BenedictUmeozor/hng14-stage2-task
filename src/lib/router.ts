import App from "@/App";
import IndexPage from "@/pages/IndexPage";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{ index: true, Component: IndexPage }],
  },
]);

export default router;
