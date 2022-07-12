import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

// Layouts
import { BaseLayout, SideBarLayout } from "./layouts";
// Containers
import { ProtectedRoute } from "./containers";
// Components
import { SuspenseLoader } from "./components";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Page
const DashBoard = Loader(lazy(() => import("./pages/DashBoard")));
const LoginPage = Loader(lazy(() => import("./pages/Login")));
const SignUpPage = Loader(lazy(() => import("./pages/SignUp")));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "",
        element: <LoginPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <SideBarLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <DashBoard />,
      },
      {
        path: "drivers",
        element: <DashBoard />,
      },
      {
        path: "perks",
        element: <DashBoard />,
      },
    ],
  },
];

export default routes;

export const apiRoutes = {
  Auth: {
    SignIn: "/auth/signin",
    SignUp: "/auth/signup",
    LogOut: "/auth/logout",
    RefreshToken: "/auth/refresh",
  },
  Driver: {
    AddDriver: "driver",
    StartDuty: "driver/start-duty",
    AddPerk: "driver/add-perk",
    EndDuty: "driver/end-duty",
    CheckDuty: "driver/check-duty",
    AssignPerk: "driver/assign-perk",
  },
};
