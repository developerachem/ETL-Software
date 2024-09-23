import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../../features/auth/auth-slice";
import { setTitle } from "../../../features/page-title/pate-title";
import {
  URLAdminBlog,
  URLAdminCategory,
  URLAdminDashboard,
  URLAdminMessages,
  URLAdminPortfolio,
  URLAdminSettings,
} from "../../../routes/url";
import { styles } from "../../../utils/cn";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="">
      <Link to="/">
        <img
          src="/logo.png"
          className="h-[45px] w-[100px] object-contain m-3"
          alt=""
        />
      </Link>

      <div className="mt-10">
        <ul className="flex flex-col gap-3">
          <MenuList
            title="Home Page"
            icon={<img src="/home.png" className="h-[18px] w-[18px]" />}
            link="/"
          />

          <MenuList
            title="Dashboard"
            icon={<img src="/dashboard.png" className="h-[18px] w-[18px]" />}
            link={URLAdminDashboard()}
          />

          <MenuList
            title="Portfolio"
            icon={<img src="/portfolio.png" className="h-[18px] w-[18px]" />}
            link={URLAdminPortfolio()}
          />

          <MenuList
            title="Category"
            icon={<img src="/category.png" className="h-[18px] w-[18px]" />}
            link={URLAdminCategory()}
          />

          <MenuList
            title="Blog"
            icon={<img src="/blog.png" className="h-[18px] w-[18px]" />}
            link={URLAdminBlog()}
          />

          <MenuList
            title="Messages"
            icon={<img src="/message.png" className="h-[18px] w-[18px]" />}
            link={URLAdminMessages()}
          />

          <MenuList
            title="Settings"
            icon={<img src="/settings.png" className="h-[18px] w-[18px]" />}
            link={URLAdminSettings()}
          />

          <MenuList
            title="Log Out"
            handler={() => {
              dispatch(logout());
              navigate("/");
            }}
            icon={<img src="/logout.png" className="h-[20px] w-[20px]" />}
          />
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

interface listProps {
  title: string;
  icon: JSX.Element;
  active?: boolean;
  link?: string;
  handler?: () => void;
}
const MenuList = ({ title, icon, link, handler }: listProps) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  console.log({ pathname });

  useEffect(() => {
    switch (pathname) {
      case URLAdminDashboard():
        dispatch(setTitle("Dashboard"));
        break;

      case URLAdminPortfolio():
        dispatch(setTitle("Portfolio"));
        break;

      case URLAdminCategory():
        dispatch(setTitle("Category"));
        break;

      case URLAdminBlog():
        dispatch(setTitle("Blogs"));
        break;

      case URLAdminMessages():
        dispatch(setTitle("Messages"));
        break;

      case URLAdminSettings():
        dispatch(setTitle("Settings"));
        break;

      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (handler) {
    return (
      <li>
        <button
          onClick={() => handler()}
          className={styles(
            "text-white flex w-full text-[14px] items-center gap-2 hover:border-l-[15px] hover:bg-[#ffffff15] border-primaryColor pl-5 py-3 font-[font-500] transition-all",
            { "border-l-[15px] bg-[#ffffff15]": pathname === link }
          )}
        >
          {icon}
          {title}
        </button>
      </li>
    );
  } else {
    return (
      <li>
        <Link
          to={link || "/"}
          className={styles(
            "text-white flex text-[14px] items-center gap-2 hover:border-l-[15px] hover:bg-[#ffffff15] border-primaryColor pl-5 py-3 font-[font-500] transition-all",
            { "border-l-[15px] bg-[#ffffff15]": pathname === link }
          )}
        >
          {icon}
          {title}
        </Link>
      </li>
    );
  }
};
