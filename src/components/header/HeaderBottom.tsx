import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../../utils/cn";
import { ServiceHoverElement } from "./HoverElement";

function HeaderBottom() {
  const storedMode = localStorage.getItem("localColor") || "yellow";
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
        <div className="bg-white shadow-xl flex rounded-full border px-2 p-4">
          <ul className="flex gap-0">
            <List title="Home" link="/" />
            <List title="About" link="/about" />
            <List
              title="Services"
              link="/services"
              children={<ServiceHoverElement />}
            />
            <List title="Technology" link="/technology" />
            <List title="Portfolio" link="/portfolio" />
            <List title="Blog" link="/blog" />
            <List title="Contact" link="/contact" />
          </ul>
        </div>
      </div>

      <div className="h-[60px] w-[30px] bg-[#fff] absolute top-[40%] right-0 mr-0 rounded-tl-lg rounded-bl-lg shadow border overflow-hidden flex flex-col">
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
  link: string;
  children?: JSX.Element;
}
const List = ({ title, link, children }: ListProps) => {
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

      <Link
        to={link}
        className={styles(
          `font-[font-500] text-[17px] text-black bg-white px-[30px] py-3 rounded-full transition-all hover:bg-primaryColor hover:text-white`,
          {
            "bg-primaryColor text-white": pathname === link,
          }
        )}
      >
        {title}
      </Link>
    </li>
  );
};

export default HeaderBottom;
