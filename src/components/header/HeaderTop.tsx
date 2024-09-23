import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp, FaBars, FaTimes } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import Container from "../../container/Container";
import serviceData from "../../pages/serviceSingle/serviceData";
import { URLContact } from "../../routes/url";
import { styles } from "../../utils/cn";

function HeaderTop() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

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
    <div className="relative">
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
              <img
                src={logo}
                alt=""
                className="w-[60px] sm:w-[80px] lg:w-[100px]"
              />
            </Link>

            {scrollPosition}

            <div className="flex gap-5 items-center">
              <div className="border flex py-1 sm:py-2 gap-3 rounded-full bg-color300 px-5 items-center">
                <IoLogoWhatsapp
                  size={22}
                  className="text-primaryColor cursor-pointer"
                />
                <div className="w-[2px] bg-color500 h-[30px]" />
                <IoCall
                  size={22}
                  className="text-primaryColor cursor-pointer"
                />
              </div>
              <Link
                to={URLContact()}
                className="hidden md:flex btn border-primaryColor bg-primaryColor rounded-full text-white px-2 sm:px-4 text-[11px] sm:text-[14px] lg:px-7 hover:bg-color900 font-[font-500]"
              >
                Get In Touch
              </Link>

              <FaBars
                size={25}
                className="block md:hidden"
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>
        </Container>
      </div>

      <div
        className={styles(
          "h-screen w-[300px] bg-white md:hidden fixed top-0 right-0 z-[999] transition-all translate-x-[300px]",
          { "translate-x-[0]": isOpen }
        )}
        style={{ boxShadow: "0 0 20px #00000050" }}
      >
        <div className="flex justify-between items-center py-3 px-5 border-b border-[#00000030]">
          <FaTimes color="#fff" onClick={() => setIsOpen(false)} size={30} />
        </div>

        <div className="flex flex-col p-6">
          <Link
            onClick={() => setIsOpen(false)}
            to="/"
            className="font-[font-400] flex items-center gap-3 text-black pt-2 pb-2"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/about"
            className="font-[font-400] flex items-center gap-3 text-black pt-2 pb-2"
          >
            About
          </Link>
          <button
            onClick={() => setDropdown(!dropdown)}
            // to="/services"
            className="font-[font-400] flex items-center text-black justify-between  pt-2 pb-2"
          >
            Services
            {dropdown ? <FaAngleUp /> : <FaAngleDown />}
          </button>

          <div
            className={styles("pl-3 opacity-0 h-0 invisible transition-all", {
              "h-auto visible opacity-100": dropdown,
            })}
          >
            {serviceData.map((item, index) => (
              <Link
                key={index}
                onClick={() => {
                  setIsOpen(false);
                  setDropdown(!dropdown);
                }}
                to={item.link}
                className="font-[font-400] flex items-center gap-3 text-black pt-2 pb-2"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <Link
            onClick={() => setIsOpen(false)}
            to="/blog"
            className="font-[font-400] flex items-center gap-3 text-black pt-2 pb-2"
          >
            Blog
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to={URLContact()}
            className="font-[font-400] flex items-center gap-3 text-black pt-2 pb-2"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
