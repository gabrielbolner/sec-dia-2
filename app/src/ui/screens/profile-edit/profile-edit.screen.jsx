import "./index.css";
import {Header} from "../../components/header/header.component";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

import useGlobalUser from "../../../context/user/user.context";
import {useProfile} from "../../../api/profile/useProfile";

export function ProfileEditScreen() {
  const [user, setUser] = useGlobalUser();
  const [profile, setProfile] = useState({});
  const { searchProfileById, updateProfile } = useProfile();
  const navigate = useNavigate();
  const [profileImageURL, setProfileImageURL] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    async function apiLoadProfile() {
      const response = await searchProfileById(user.id);
      setProfile(response);
      setProfileImageURL(response.profileImage);
      setPhone(response.phone);
      setFullName(response.fullName);
    }
    apiLoadProfile();
  }, []);


  const apiEditProfile = async (event) => {
    event.preventDefault();
    await updateProfile(profileImageURL, fullName, phone);
    const updatedProfile = await searchProfileById(user.id);
    setProfile(updatedProfile);
    setUser(updatedProfile);
  };

  return (
    <>
      <Header>
        <form onSubmit={apiEditProfile}>
          <div className="profile-edit-container">
            <section className="profile-edit">
              <img
                className="profile-image"
                src={profile.profileImage}
                alt={profile.fullName}
              />
              <input
                type="text"
                value={profileImageURL}
                placeholder="Url Imagem Perfil"
                onChange={(event) => setProfileImageURL(event.target.value)}
              />
              <input
                type="text"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
              />
              <input
                type="text"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <button type="submit">Salvar Perfil</button>
            </section>
          </div>
        </form>
      </Header>
    </>
  );
}
