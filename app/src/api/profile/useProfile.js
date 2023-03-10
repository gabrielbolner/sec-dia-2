import useGlobalUser from "../../context/user/user.context";
import { axiosInstance } from "../_base/axiosInstance";

export function useProfile() {
  const [user, setUser] = useGlobalUser();

  async function searchProfileByNameOrEmail(text) {
    try {
      const response = await axiosInstance.get(`/profile/search?text=${text}`);
      return response.data.content;
    } catch (error) {
      console.log(error);
    }
  }

  async function searchProfileById(id) {
    try {
      const response = await axiosInstance.get(`/profile/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProfile(profileImage, fullName, phone) {
    try {
      const response = await axiosInstance.post(`/profile/${user.id}/update`, {
        profileImage: profileImage,
        fullName: fullName,
        phone: phone,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    searchProfileByNameOrEmail,
    searchProfileById,
    updateProfile,
  };
}
