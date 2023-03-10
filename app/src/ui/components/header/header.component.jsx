import logo from "../../../assets/img/logo.png";

import "./index.css";
import LogoutForm from "../logout/logout-form.component";
import { useNavigate } from "react-router-dom";

export function Header({ children }) {
  const navigate = useNavigate();
  return (
    <div className="screen-wrapper">
      <header className="header">
        <div className="logo">
          <img
            className="logo"
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="container-row">
          <LogoutForm />
        </div>
      </header>
      {children}
    </div>
  );
}
