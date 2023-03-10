import useGlobalUser from "../../context/user/user.context";
import { axiosInstance } from "../_base/axiosInstance";

export function useComments() {
  const [user, setUser] = useGlobalUser();

  async function searchComments(idPost) {
    try {
      const response = await axiosInstance.get(`/comments/${idPost}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function insertComment(idPost, comment) {
    try {
      const response = await axiosInstance.post(`/comments/${idPost}/comment`, {
        comment: comment,
        userId: user.id,
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    searchComments,
    insertComment,
  };
}
