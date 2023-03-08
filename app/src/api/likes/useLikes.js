import useGlobalUser from "../../context/user/user.context";
import {axiosInstance} from "../_base/axiosInstance";

export function useLikes() {
  const [user, setUser] = useGlobalUser();

  async function likePost(idPost) {
    try {
      const response = await axiosInstance.post(
        `/posts/${idPost}/like/${user.id}`
      );
      return response;
    } catch (error) {
console.log(error)
}
  }

  async function removeLikePost(idPost) {
    try {
      const response = await axiosInstance.post(
        `/posts/${idPost}/unlike/${user.id}`
      );
      return response;
    } catch (error) {
console.log(error)
}
  }

  async function getLikesInfo(idPost) {
    try {
      const response = await axiosInstance.get(`/posts/${idPost}/likes`);
      return response.data;
    } catch (error) {
       console.log(error);
    }
  }




  return {
    likePost,
    removeLikePost,
    getLikesInfo,
  };
}
