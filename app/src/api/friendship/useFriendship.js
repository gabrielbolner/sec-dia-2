import useGlobalUser from "../../context/user/user.context";
import {axiosInstance} from "../_base/axiosInstance";

export function useFriendship() {
  const [user, setUser] = useGlobalUser();

  async function getFriendsList(userId) {
    try {
      const response = await axiosInstance.get(`/friends/${userId}/friends`);
      return response.data;
    } catch (error) {
console.log(error)
}
  }

  async function getRequestsList(userId) {
    try {
      const response = await axiosInstance.get(`/friends/${userId}/requests`);
      return response.data;
    } catch (error) {
console.log(error)
}
  }

  async function createRequest(friendId) {
    try {
      const response = await axiosInstance.post(
        `/friends/${user.id}/request/${friendId}`
      );
             alert("Solicitação Enviada");
      return response.data;
    } catch (error) {
console.log(error)
}
  }

  async function acceptRequest(friendId) {
    try {
      const response = await axiosInstance.post(
        `/friends/${user.id}/accept/${friendId}`
      );
       alert("Pedido Aceito");
      return response.data;
    } catch (error) {
console.log(error)
}
  }

  async function removeFriendship(friendId) {
    try {

      const response = await axiosInstance.delete(
        `/friends/${user.id}/remove/${friendId}`
      );
      alert("Amigo removido")
      return response.data;
    } catch (error) {
    console.log(error)
    }
  }

  return {
    getFriendsList,
    getRequestsList,
    createRequest,
    acceptRequest,
    removeFriendship,
  };
}
