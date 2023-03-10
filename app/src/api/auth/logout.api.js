import { axiosInstance } from "../_base/axiosInstance";

export async function logout() {
  await axiosInstance.post("/logout", {});
}
