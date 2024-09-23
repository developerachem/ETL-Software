import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import HeaderBottom from "../components/header/HeaderBottom";
import HeaderTop from "../components/header/HeaderTop";

function RootLayout() {
  return (
    <div className="relative h-screen">
      <HeaderTop />
      <div className="my-[61px] sm:my-[70px]" />
      <Outlet />
      <div className="hidden md:block">
        <HeaderBottom />
      </div>

      <Footer />
    </div>
  );
}

export default RootLayout;
