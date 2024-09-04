import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import Container from "../../container/Container";
import { URLContact } from "../../routes/url";
import { styles } from "../../utils/cn";

function HeaderTop() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / height) * 100;
      setScrollPosition(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={styles("bg-[#F4F5FA] border-b  fixed w-full top-0 z-50", {
        "bg-white": scrollPosition > 3,
      })}
    >
      <div
        className={`bg-primaryColor p-0.5`}
        style={{ width: scrollPosition + "%" }}
      />
      <Container>
        <div className="w-full flex justify-between items-center py-2">
          <Link to="/">
            <img src={logo} alt="" className="w-[80px] lg:w-[100px]" />
          </Link>

          <div className="flex gap-5 items-center">
            <div className="border flex p-2 gap-3 rounded-full bg-color300 px-5 items-center">
              <IoLogoWhatsapp
                size={25}
                className="text-primaryColor cursor-pointer"
              />
              <div className="w-[2px] bg-color500 h-[30px]" />
              <IoCall size={25} className="text-primaryColor cursor-pointer" />
            </div>
            <Link
              to={URLContact()}
              className="btn border-primaryColor bg-primaryColor rounded-full text-white px-4 lg:px-7 hover:bg-color900 font-[font-500]"
            >
              Get In Touch
            </Link>

            <FaBars size={30} className="block md:hidden" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeaderTop;
