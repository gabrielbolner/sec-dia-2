import "./index.css";
import { Header } from "../../components/header/header.component";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProfile } from "../../../api/profile/useProfile";

export function ProfileScreen() {
  const [profile, setProfile] = useState([]);
  const params = useParams();
  const { searchProfileById } = useProfile();
  const navigate = useNavigate();
  const { id } = params;

  useEffect(() => {
    async function apiLoadProfile() {
      const response = await searchProfileById(id);
      setProfile(response);
    }
    apiLoadProfile();
  }, []);

  return (
    <>
      <Header>
        <div className="profile">
          <section className="user">
            <img
              className="profile-image"
              src={profile?.profileImage}
              alt={profile?.fullName}
            />
            <h3>{profile?.fullName}</h3>
          </section>
        </div>
      </Header>
    </>
  );
}
