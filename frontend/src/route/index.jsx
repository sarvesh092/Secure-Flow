import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import {
  RedirectAuthenticatedUser,
  ProtectedRoute,
} from "../utils/ProtectedRoute";
import Loader from "../component/Loader";
import { AuthLayout } from "../component/AuthLayout";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const About = lazy(() => import("../pages/About"));
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
  {
    path: "/about",
    element: (
      <ProtectedRoute>
        <About />
      </ProtectedRoute>
    ),
  },

  // Auth routes - redirect if already authenticated and verified
  {
    path: "/login",
    element: (
      <RedirectAuthenticatedUser>
        <AuthLayout>
          <Login />
        </AuthLayout>
      </RedirectAuthenticatedUser>
    ),
  },
  {
    path: "/signup",
    element: (
      <RedirectAuthenticatedUser>
        <AuthLayout>
          <Signup />
        </AuthLayout>
      </RedirectAuthenticatedUser>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <RedirectAuthenticatedUser>
        <AuthLayout>
          <ForgotPassword />
        </AuthLayout>
      </RedirectAuthenticatedUser>
    ),
  },
  {
    path: "/reset-password/:token",
    element: (
      <RedirectAuthenticatedUser>
        <AuthLayout>
          <ResetPassword />
        </AuthLayout>
      </RedirectAuthenticatedUser>
    ),
  },
  // Email verification route - requires authentication but not verification
  {
    path: "/verify-email",
    element: (
      <AuthLayout>
        <EmailVerification />
      </AuthLayout>
    ),
  },

  {
    path: "*",
    element: <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">404 - Page Not Found</div>,
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
