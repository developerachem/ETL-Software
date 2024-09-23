import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import ErrorBoundary from "../../components/error-boundary/ErrorBoundary";
import ErrorBoundaryFallback from "../../components/error-boundary/ErrorBoundaryFallback";
import Loader from "../../components/loader/Loader";
import useAuth from "../hooks/auth/useAuthentication";

/**
 * @description if user is logged he can't public routes
 * @param props.children
 */
function PublicGuard() {
  // login status
  const isLoggedIn = useAuth();

  // public route
  return !isLoggedIn ? (
    <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  ) : (
    <Navigate to={"/admin"} />
  );
}

// export public route
export default PublicGuard;
