import useGlobalUser from "../../context/user/user.context";
import {axiosInstance} from "../_base/axiosInstance";

export function usePosts() {
  const [user, setUser] = useGlobalUser();

  async function searchPostById(id) {
    try {
      const response = await axiosInstance.get(`/posts/${id}`);
      return response.data.content;
    } catch (error) {
       console.log(error);
    }
  }

  async function createNewPost(writtenContent, imageContent, postPrivacy) {
    try {
      const response = await axiosInstance.post(`/posts/${user.id}`, {
        postPrivacy: postPrivacy,
        writtenContent: writtenContent,
        imageContent: imageContent,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }


  return {
    searchPostById,
    createNewPost,
  };
}
