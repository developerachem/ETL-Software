import { Outlet } from "react-router-dom";
import HeaderBottom from "../components/header/HeaderBottom";
import HeaderTop from "../components/header/HeaderTop";

function RootLayout() {
  return (
    <div className="relative h-screen">
      <HeaderTop />
      <div className="my-[70px]" />
      <Outlet />
      <div className="hidden md:block">
        <HeaderBottom />
      </div>
    </div>
  );
}

export default RootLayout;
