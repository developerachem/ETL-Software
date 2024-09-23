import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import PrivateGuard from "./admin/guard/PrivateGuard";
import PublicGuard from "./admin/guard/PublicGuard";
import useAuthCheck from "./admin/hooks/auth/useAuthenticationCheck";
import AdminLayout from "./admin/layouts/AdminLayout";
import Login from "./admin/pages/login/Login";
import "./App.css";
import ErrorBoundaryFallback from "./components/error-boundary/ErrorBoundaryFallback";
import Loader from "./components/loader/Loader";
import RootLayout from "./layout/RootLayout";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Services from "./pages/services/Services";
import Technology from "./pages/technology/Technology";
import { adminRouter } from "./routes/adminRouters";
import { appRouter } from "./routes/appRouter";
import { setScroll } from "./window/window";

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

  {
    element: <PrivateGuard />,
    children: [
      {
        element: <AdminLayout />,
        children: adminRouter,
      },
    ],
  },
  {
    element: <PublicGuard />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const dispatch = useDispatch();
  const { isChecked } = useAuthCheck();

  console.log(isChecked);

  const handleScroll = () => {
    const position = window.pageYOffset;
    dispatch(setScroll(position));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("Running...");

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{!isChecked ? <Loader /> : <RouterProvider router={router} />}</>;
}

export default App;
