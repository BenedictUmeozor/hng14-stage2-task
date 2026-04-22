import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex min-h-screen grid-rows-[auto_1fr] max-lg:grid lg:h-screen lg:overflow-hidden">
      <Sidebar />

      <div className="relative flex-1 pt-[77px] pb-6 max-lg:pt-15 max-md:pt-8 lg:overflow-y-auto">
        <div className="mx-auto w-full max-w-[778px] px-6 md:px-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
