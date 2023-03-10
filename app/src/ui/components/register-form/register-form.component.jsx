import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../../api/auth/register.api";
import "./index.css";

export default function RegisterForm({ erro }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [permission, setPermission] = useState("");
  const navigate = useNavigate();
  function goBackToLogin() {
    navigate("/");
  }

  async function apiRegister() {
    event.preventDefault();

    const response = await register(
      fullName,
      email,
      password,
      profileImage,
      phone,
      permission
    );

    if (response.id) {
      alert("Cadastro Feito com Sucesso");
    }
  }

  const handleChange = (event) => {
    setPermission(event.target.value);
  };

  return (
    <form className="tela-registro">
      <h2>Cadastre-se</h2>
      <input
        placeholder=" Nome Completo"
        id="nome"
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <br />
      <input
        placeholder="Email"
        id="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        placeholder="Link Imagem Perfil"
        id="profileImage"
        type="text"
        value={profileImage}
        onChange={(e) => setProfileImage(e.target.value)}
      />
      <br />
      <input
        placeholder="Senha"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input
        placeholder="Telefone"
        id="phone"
        type="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <label htmlFor="permission">Permissão: </label>
      <select
        name="permission"
        defaultValue={permission}
        onChange={handleChange}
      >
        <option value="ADMIN">ADMIN</option>
        <option value="USER">USER</option>
      </select>
      <br />
      <button onClick={apiRegister}>Cadastrar</button>
      <br />
      <button onClick={goBackToLogin}>Voltar</button>
    </form>
  );
}
