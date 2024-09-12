import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../../utils/cn";
import { ServiceHoverElement } from "./HoverElement";

function HeaderBottom() {
  const storedMode = localStorage.getItem("localColor") || "blue";
  const [mode, setMode] = useState(storedMode);

  // * Mode Switcher
  const toggleMode = (mod: string) => {
    localStorage.setItem("localColor", mod);
    setMode(mod);
  };

  // * Update Mode on change
  useEffect(() => {
    const colorThemeElement = document.getElementById("colorTheme");

    if (colorThemeElement) {
      colorThemeElement.setAttribute("data-theme", mode);
    }
  }, [mode]);

  return (
    <>
      <div className="fixed bottom-5 w-full flex justify-center items-center z-30">
        <div className="bg-white shadow-xl flex rounded-full border px-2 p-2">
          <ul className="flex gap-0">
            <List title="Home" link="/" />
            <List title="About" link="/about" />
            <List
              title="Services"
              isButton
              children={<ServiceHoverElement />}
            />
            {/* <List title="Technology" link="/technology" /> */}
            <List title="Portfolio" link="/portfolio" />
            <List title="Blog" link="/blog" />
            <List title="Career" link="/career" />
            <List title="Contact" link="/contact" />
          </ul>
        </div>
      </div>

      <div className="h-[60px] w-[30px] bg-[#fff] fixed top-[40%] right-0 mr-0 rounded-tl-lg rounded-bl-lg shadow border overflow-hidden flex flex-col">
        <button
          className="bg-[#2D62AE] h-[50%] w-full"
          onClick={() => toggleMode("blue")}
        />
        <button
          className="bg-[#F89F20] h-[50%] w-full"
          onClick={() => toggleMode("yellow")}
        />
      </div>
    </>
  );
}

interface ListProps {
  title: string;
  link?: string;
  children?: JSX.Element;
  isButton?: boolean;
}
const List = ({ title, link, children, isButton }: ListProps) => {
  const { pathname } = useLocation();

  return (
    <li className="menu-list">
      {children && (
        <div className="bg-[#3f3f3f40] w-full h-[960px] -bottom-5 left-0 absolute -z-10 hover-box flex justify-center pointer-events-none">
          <div
            className={`absolute bottom-[90px] border border-[#00000050] bg-white w-[650px] p-6 rounded-[20px] pointer-events-auto`}
          >
            {children}
          </div>
        </div>
      )}

      {!isButton ? (
        <Link
          to={link || "/"}
          className={styles(
            `font-[font-500] text-[15px] lg:text-[17px] text-black bg-white px-[20px] lg:px-[30px] py-3 rounded-full ease-in duration-300 hover:bg-primaryColor hover:text-white inline-block`,
            {
              "bg-primaryColor text-white": pathname === link,
            }
          )}
        >
          {title}
        </Link>
      ) : (
        <button
          className={styles(
            `font-[font-500] text-[15px] lg:text-[17px] text-black bg-white px-[20px] lg:px-[30px] py-3 rounded-full ease-in duration-300 hover:bg-primaryColor hover:text-white`,
            {
              "bg-primaryColor text-white": pathname === link,
            }
          )}
        >
          {title}
        </button>
      )}
    </li>
  );
};

export default HeaderBottom;
