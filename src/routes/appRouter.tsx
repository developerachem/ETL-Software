import ServiceSingle from "../pages/serviceSingle/ServiceSingle";
import { URLServiceSingle } from "./url";

export const appRouter = [
  {
    path: URLServiceSingle(":name"),
    element: <ServiceSingle />,
  },
];
