import { useNavigate } from "react-router-dom";
import { logout } from "../../../api/auth/logout.api";
import useGlobalUser from "../../../context/user/user.context";
import "./index.css";

export default function LogoutForm() {
  const [user, setUser] = useGlobalUser();
  const navigate = useNavigate();
  async function realizarLogout() {
    await logout();
    setUser(null);
  }

  return (
    <button className="botao-logout" onClick={realizarLogout}>
      Sair
    </button>
  );
}
