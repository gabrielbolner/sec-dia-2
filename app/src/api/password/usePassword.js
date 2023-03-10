import { axiosInstance } from "../_base/axiosInstance";

export function usePassword() {
  async function updatePassword(token, newPassword) {
    try {
      const response = await axiosInstance.post(`/passwords/recover-password`, {
        token: token,
        newPassword: newPassword,
      });
      alert("Alteração feita com sucesso!");
      return response.data;
    } catch (erro) {
      alert(erro);
    }
  }
  async function requestPasswordRecover(email) {
    try {
      const response = await axiosInstance.post(`/passwords/forgot-password`, {
        email: email,
      });
      alert("Confira seu Email");
      return response.data;
    } catch (erro) {
      alert(erro);
    }
  }

  return {
    updatePassword,
    requestPasswordRecover,
  };
}
