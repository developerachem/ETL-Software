import Blogs from "../admin/pages/blog/Blog";
import Category from "../admin/pages/category/Category";
import Dashboard from "../admin/pages/dashboard/Dashboard";
import Message from "../admin/pages/message/Message";
import Portfolio from "../admin/pages/portfolio/Portfolio";
import Settings from "../admin/pages/settings/Settings";
import {
  URLAdminBlog,
  URLAdminCategory,
  URLAdminDashboard,
  URLAdminMessages,
  URLAdminPortfolio,
  URLAdminSettings,
} from "./url";

export const adminRouter = [
  {
    path: URLAdminDashboard(),
    element: <Dashboard />,
  },
  {
    path: URLAdminPortfolio(),
    element: <Portfolio />,
  },
  {
    path: URLAdminBlog(),
    element: <Blogs />,
  },
  {
    path: URLAdminCategory(),
    element: <Category />,
  },
  {
    path: URLAdminMessages(),
    element: <Message />,
  },
  {
    path: URLAdminSettings(),
    element: <Settings />,
  },
];
