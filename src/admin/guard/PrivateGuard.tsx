import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import ErrorBoundary from "../../components/error-boundary/ErrorBoundary";
import ErrorBoundaryFallback from "../../components/error-boundary/ErrorBoundaryFallback";
import Loader from "../../components/loader/Loader";
import useAuth from "../hooks/auth/useAuthentication";

/**
 * @description PrivateGuard component
 */
function PrivateGuard() {
  // check if user is logged in
  const isLoggedIn = useAuth();

  // protected route
  return isLoggedIn ? (
    <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  ) : (
    <Navigate to="/login" />
  );
}

// export private route
export default PrivateGuard;
