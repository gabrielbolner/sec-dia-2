import "./index.css";
import logo from "../../../logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/auth/login.api";
import useGlobalUser from "../../../context/user/user.context";
import LoginForm from "../../components/login-form/login-form.component";

export function LoginScreen() {
  const navigate = useNavigate();
  const [user, setUser] = useGlobalUser();
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(formFields) {
    try {
      const response = await login({
        username: formFields.username.value,
        password: formFields.password.value,
      });

      setUser(response);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/me");
    }
  }, [user, navigate]);

  return (
    <div className="login-screen">
      <img src={logo} alt="SafetyLogin Logo" />
      <LoginForm onSubmit={onSubmit} error={errorMessage} />
    </div>
  );
}
