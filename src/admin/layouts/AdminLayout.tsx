import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/sidebar/Sidebar";

function AdminLayout() {
  const height = window?.innerHeight;

  console.log(height);
  return (
    <div className="flex">
      <div className="min-w-[250px] bg-[#1C2434] h-screen">
        <Sidebar />
      </div>
      <div className="w-full relative">
        <div className="p-5 bg-white w-full h-[70px] shadow-2xl border-b">
          <Header />
        </div>
        <div
          className="w-full bg-[#f1f5f9] overflow-y-auto overflow-x-hidden p-5"
          style={{ height: height - 70 }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
