import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ErrorBoundaryFallback from "./components/error-boundary/ErrorBoundaryFallback";
import RootLayout from "./layout/RootLayout";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Services from "./pages/services/Services";
import Technology from "./pages/technology/Technology";
import { appRouter } from "./routes/appRouter";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      ...appRouter,
    ],
    errorElement: <ErrorBoundaryFallback />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
