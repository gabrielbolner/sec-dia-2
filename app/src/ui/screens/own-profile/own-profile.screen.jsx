import "./index.css";
import {Header} from "../../components/header/header.component";
import useGlobalUser from "../../../context/user/user.context";
import React from "react";
import {useNavigate} from "react-router-dom";

export function OwnProfileScreen() {
  const [user, setUser] = useGlobalUser();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user]);

  function editprofile() {
    navigate("/edit-profile");
  }

  return (
    <>
      {user ? (
        <Header>
          <div className="container-profile">
            <section className="profile-user">
              <img
                className="image-profile"
                src={user.profileImage}
                alt={user.fullName}
              />
              <div className="informacoes">
                <h2 className="nome">{user.fullName}</h2>
                {user.nickname ? (
                  <span className="apelido">@{user.nickname}</span>
                ) : null}
                <h4 className="email">{user.email}</h4>
                <button className="edit-profile" onClick={editprofile}>
                  Editar
                </button>
              </div>
            </section>
          </div>
        </Header>
      ) : null}
    </>
  );
}

