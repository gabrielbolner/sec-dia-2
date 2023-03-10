import { Navigate } from "react-router-dom";
import useGlobalUser from "../context/user/user.context";

export function PrivateRoute({ Screen }) {
  const [user, setUser] = useGlobalUser();

  if (user !== null) {
    return <Screen />;
  }

  return <Navigate to="/" />;
}
