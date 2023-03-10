import "./index.css";
import React, { useState } from "react";
import { usePassword } from "../../../api/password/usePassword";

export function ForgotMyPasswordScreen() {
  const { requestPasswordRecover } = usePassword();
  const [email, setEmail] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    await requestPasswordRecover(email);
  }

  return (
    <div className="forgot-my-password">
      <h2>Esqueci minha senha</h2>
      <form onSubmit={handleSubmit} className="forgot-form">
        <div>
          <input
            placeholder="Digite seu Email"
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <button type="submit">Solicitar</button>
      </form>
    </div>
  );
}
