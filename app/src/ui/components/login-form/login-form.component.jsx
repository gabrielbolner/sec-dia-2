import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/form/use-form.hook";
import "./index.css";

const initialFormFields = {
  username: { value: "" },
  password: { value: "" },
};

export default function LoginForm({ onSubmit, error }) {
  const navigate = useNavigate();
  const { handleChange, handleSubmit, formFields } = useForm({
    initialFormFields: initialFormFields,
    onSubmit,
  });

  function irAteRegistro() {
    navigate("/register");
  }

  function irAteResetarSenha() {
    navigate("/forgot-my-password");
  }

  return (
    <form
      title="Login"
      buttonLabel="Sign in"
      onSubmit={handleSubmit}
      error={error}
      className="tela-login"
    >
      <input
        placeholder="Email"
        className="login-register-form_input"
        name="username"
        onChange={handleChange}
        value={formFields.username.value}
        type="text"
      />

      <input
        placeholder="Senha"
        className="login-register-form_input"
        name="password"
        onChange={handleChange}
        value={formFields.password.value}
        type="password"
      />
      <button>LOGIN</button>
      <button onClick={() => irAteResetarSenha()}>ESQUECI MINHA SENHA</button>
      <button onClick={() => irAteRegistro()}>REGISTRAR</button>
    </form>
  );
}
