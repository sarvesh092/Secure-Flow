import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import {
  RedirectAuthenticatedUser,
  ProtectedRoute,
} from "../utils/ProtectedRoute";
import Loader from "../component/Loader";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Signup = lazy(() => import("../pages/Signup"));
const Login = lazy(() => import("../pages/Login"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const ResetPassword = lazy(() => import("../pages/ResetPassword"));
const EmailVerification = lazy(() => import("../pages/EmailVerification"));

const mainroutes = createBrowserRouter([
  // Protected routes - require authentication and verification
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },

  // Auth routes - redirect if already authenticated and verified
  {
    path: "/login",
    element: (
      <RedirectAuthenticatedUser>
        <Login />
      </RedirectAuthenticatedUser>
    ),
  },
  {
    path: "/signup",
    element: (
      <RedirectAuthenticatedUser>
        <Signup />
      </RedirectAuthenticatedUser>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <RedirectAuthenticatedUser>
        <ForgotPassword />
      </RedirectAuthenticatedUser>
    ),
  },
  {
    path: "/reset-password/:token",
    element: (
      <RedirectAuthenticatedUser>
        <ResetPassword />
      </RedirectAuthenticatedUser>
    ),
  },
  // Email verification route - requires authentication but not verification
  {
    path: "/verify-email",
    element: <EmailVerification />,
  },

  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
]);

const Navigation = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={mainroutes} />
    </Suspense>
  );
};

export default Navigation;
