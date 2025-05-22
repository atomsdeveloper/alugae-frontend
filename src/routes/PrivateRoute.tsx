import type { ReactNode } from "react";

// React Router
import { Navigate, useLocation } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

interface PrivateRouteProps {
  children: ReactNode;
  isClosed?: boolean;
  [key: string]: unknown;
}

// Replace 'RootState' with the actual type of your Redux root state if different
interface RootState {
  auth: {
    isLoggedIn: boolean;
  };
}

export default function PrivateRoute({
  children,
  isClosed = false,
  ...rest
}: PrivateRouteProps) {
  const location = useLocation();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  if (isClosed && !isLoggedIn) {
    return (
      // Redirect to login page if the route is closed and user is not logged in
      // Pass the current location to the login page so it can redirect back after login
      // This is useful for when the user tries to access a protected route directly
      // and needs to be redirected to the login page first
      <Navigate to="/login" state={{ prevPath: location.pathname }} {...rest} />
    );
  }
  return children;
}
