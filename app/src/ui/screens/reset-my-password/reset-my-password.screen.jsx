import "./index.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { usePassword } from "../../../api/password/usePassword";

export function ResetMyPasswordScreen() {
  const { token } = useParams();

  const { updatePassword } = usePassword();

  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (password != confirmpassword) {
      alert("Confira se as senhas estão iguais!");
    } else {
      await updatePassword(token, password);
    }
  }

  return (
    <div className="reset-password">
      <h2>Redefinir senha</h2>
      <form onSubmit={handleSubmit} className="reset-password-form">
        <div>
          <input
            placeholder="Nova senha"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder="Confirme a nova senha"
            type="password"
            id="confirm-password"
            value={confirmpassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
