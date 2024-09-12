import BlogSingle from "../pages/blog/BlogSingle";
import Career from "../pages/career/Career";
import CareerSingle from "../pages/career/CareerSingle";
import ServiceSingle from "../pages/serviceSingle/ServiceSingle";
import { URLBlogSingle, URLCareerSingle, URLServiceSingle } from "./url";

export const appRouter = [
  {
    path: URLServiceSingle(":name"),
    element: <ServiceSingle />,
  },
  {
    path: URLBlogSingle(":name"),
    element: <BlogSingle />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: URLCareerSingle(":name"),
    element: <CareerSingle />,
  },
];
