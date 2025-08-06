import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Signup = lazy(() => import("../pages/Signup"));
const Login = lazy(() => import("../pages/Login"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const ResetPassword = lazy(() => import("../pages/ResetPassword"));
const EmailVerification = lazy(() => import("../pages/EmailVerification"));

const mainroutes = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/verify-email", element: <EmailVerification /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
]);

const Navigation = () => {
  const element = <RouterProvider router={mainroutes} />;
  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
};

export default Navigation;
