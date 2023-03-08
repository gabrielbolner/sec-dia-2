import {createBrowserRouter} from "react-router-dom";
import {PrivateRoute} from "./private-route.component";
import {LoginScreen} from "../ui/screens/login/login.screen";
import {ProfileScreen} from "../ui/screens/profile/profileScreen";
import {RegisterScreen} from "../ui/screens/register/register.screen";
import {ProfileEditScreen} from "../ui/screens/profile-edit/profile-edit.screen";
import {OwnProfileScreen} from "../ui/screens/own-profile/own-profile.screen";


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
