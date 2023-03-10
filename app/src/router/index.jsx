import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./private-route.component";
import { LoginScreen } from "../ui/screens/login/login.screen";
import { ProfileScreen } from "../ui/screens/profile/profileScreen";
import { RegisterScreen } from "../ui/screens/register/register.screen";
import { ProfileEditScreen } from "../ui/screens/profile-edit/profile-edit.screen";
import { OwnProfileScreen } from "../ui/screens/own-profile/own-profile.screen";
import { ResetMyPasswordScreen } from "../ui/screens/reset-my-password/reset-my-password.screen";
import { ForgotMyPasswordScreen } from "../ui/screens/forgot-my-password/forgot-my-password.screen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
  {
    path: "/forgot-my-password",
    element: <ForgotMyPasswordScreen />,
  },
  {
    path: "/recover-password/:token",
    element: <ResetMyPasswordScreen />,
  },
  {
    path: "/me",
    element: <PrivateRoute Screen={OwnProfileScreen} />,
  },
  {
    path: "/profile/:id",
    element: <PrivateRoute Screen={ProfileScreen} />,
  },
  {
    path: "/edit-profile",
    element: <PrivateRoute Screen={ProfileEditScreen} />,
  },
]);
