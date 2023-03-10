import { axiosInstance } from "../_base/axiosInstance";

export async function register(
  fullName,
  email,
  password,
  profileImage,
  phone,
  permission
) {
  try {
    const response = await axiosInstance.post("/users", {
      fullName: fullName,
      email: email,
      password: password,
      phone: phone,
      permission: permission,
      profileImage: profileImage,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
