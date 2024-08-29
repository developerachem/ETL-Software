import { Outlet } from "react-router-dom";
import HeaderBottom from "../components/header/HeaderBottom";
import HeaderTop from "../components/header/HeaderTop";

function RootLayout() {
  return (
    <div className="relative h-screen overflow-auto">
      <HeaderTop />
      <Outlet />
      <HeaderBottom />
    </div>
  );
}

export default RootLayout;
