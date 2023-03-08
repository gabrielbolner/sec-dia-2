import "./index.css";
import {useState} from "react";
import RegisterForm from "../../components/register-form/register-form.component";

export function RegisterScreen() {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="register-screen">
      <RegisterForm erro={errorMessage} />
    </div>
  );
}
